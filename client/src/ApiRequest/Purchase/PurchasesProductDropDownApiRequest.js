import axios from "axios";
import {BASE_URL} from "../../utility/Config.js";
import store from "../../redux/store/Store.js";
import {setPurchaseProductDropDown} from "../../redux/stateSlice/purchaseSlice.js";

export const PurchaseProductDropDownRequest = async () => {

    const url = `${BASE_URL}/ProductDropDown`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'].length > 0){
                store.dispatch(setPurchaseProductDropDown(res.data['data']));
                return { status: 'success', message: res.data['message'] };
            }else {
                store.dispatch(setPurchaseProductDropDown([]));
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