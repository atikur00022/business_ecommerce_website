import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {onChangeCustomerInput} from "../../redux/stateSlice/customerSlice.js";

export const FillCustomerFormApiRequest  = async (objectId) => {

    let url = `${BASE_URL}/CustomerDetails/${objectId}`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            const { name, address, email, phone } = res.data['data'][0];

            store.dispatch(onChangeCustomerInput({Name: "name", Value: name}))
            store.dispatch(onChangeCustomerInput({Name: "email", Value: email}))
            store.dispatch(onChangeCustomerInput({Name: "phone", Value: phone}))
            store.dispatch(onChangeCustomerInput({Name: "address", Value: address}))

            return { status: 'success', message: res.data['message'] };
        } else {
            return { status: 'fail', message: res.data['message'] };
        }
    } catch (e) {

        if (e.response && e.response.status === 401) {
            return { status: "fail", message: "User Unauthorized" };
        }

        return { status: "error", message: e.toString() };
    }
};