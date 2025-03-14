import axios from "axios";
import {BASE_URL} from "../../utility/Config.js";
import store from "../../redux/store/Store.js";
import {setBrandDropDown} from "../../redux/stateSlice/productSlice.js";

export const BrandDropDownRequest = async () => {

    const url = `${BASE_URL}/BrandDropDown`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            if(res.data['data'].length > 0){
                store.dispatch(setBrandDropDown(res.data['data']));
                return { status: 'success', message: res.data['message'] };
            }else {
                store.dispatch(setBrandDropDown([]));
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