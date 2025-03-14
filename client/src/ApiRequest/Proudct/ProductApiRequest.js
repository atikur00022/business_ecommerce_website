import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {setProductList, setProductListTotal} from "../../redux/stateSlice/productSlice.js";

export const ProductRequest = async (pageNo, perPage, searchKeyword) => {

    const url = `${BASE_URL}/ProductList/${pageNo}/${perPage}/${searchKeyword}`;


    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'][0]['Rows'].length > 0){
                store.dispatch(setProductList(res.data['data'][0]['Rows']));
                store.dispatch(setProductListTotal(res.data['data'][0]['Total'][0]['count']));
                return { status: 'success', message: res.data['message'] };
            }else {
                store.dispatch(setProductList([]));
                store.dispatch(setProductListTotal(0));
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