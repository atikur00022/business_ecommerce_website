import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {setBrandList, setBrandListTotal} from "../../redux/stateSlice/brandSlice.js";
import ValidationHelper from "../../utility/ValidationHelper.js";

export const BrandRequest = async (pageNo, perPage, searchKeyword) => {

    const url = `${BASE_URL}/BrandList/${pageNo}/${perPage}/${searchKeyword}`;


    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'][0]['Rows'].length > 0){
                store.dispatch(setBrandList(res.data['data'][0]['Rows']));
                store.dispatch(setBrandListTotal(res.data['data'][0]['Total'][0]['count']));
                ValidationHelper.SuccessToast(res.data['message']);
            }else {
                store.dispatch(setBrandList([]));
                store.dispatch(setBrandListTotal(0));
                ValidationHelper.ErrorToast(res.data['message']);
            }

        } else {
            return { status: "fail", message: "Something went wrong!" };
        }
    } catch (e) {

        if (e.response && e.response.status === 401) {
            return { status: "fail", message: "User Unauthorized" };
        }

        return { status: "error", message: e.toString() };
    }
};