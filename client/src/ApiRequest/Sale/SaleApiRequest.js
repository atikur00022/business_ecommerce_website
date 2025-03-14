import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {setSaleList, setSaleListTotal} from "../../redux/stateSlice/saleSlice.js";

export const SaleRequest = async (pageNo, perPage, searchKeyword) => {

    const url = `${BASE_URL}/SalesList/${pageNo}/${perPage}/${searchKeyword}`;


    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'][0]['Rows'].length > 0){
                store.dispatch(setSaleList(res.data['data'][0]['Rows']));
                store.dispatch(setSaleListTotal(res.data['data'][0]['Total'][0]['count']));
                return { status: 'success', message: res.data['message'] };
            }else {
                store.dispatch(setSaleList([]));
                store.dispatch(setSaleListTotal(0));
                return { status: 'fail', message: res.data['message'] };
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