import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {setCustomerList, setCustomerListTotal} from "../../redux/stateSlice/customerSlice.js";

export const CustomerRequest = async (pageNo, perPage, searchKeyword) => {

    const url = `${BASE_URL}/CustomerList/${pageNo}/${perPage}/${searchKeyword}`;


    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'][0]['Rows'].length > 0){
                store.dispatch(setCustomerList(res.data['data'][0]['Rows']));
                store.dispatch(setCustomerListTotal(res.data['data'][0]['Total'][0]['count']));
                return { status: 'success', message: res.data['message'] };
            }else {
                store.dispatch(setCustomerList([]));
                store.dispatch(setCustomerListTotal(0));
                return { status: 'fail', message: res.data['message'] };
            }

        } else if (res.status === 200 && res.data['status'] === 'fail') {

            if(res.data['data']['keyPattern']['phone'] === 1){
                return { status: 'success', message: "Mobile number already exists!" };
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