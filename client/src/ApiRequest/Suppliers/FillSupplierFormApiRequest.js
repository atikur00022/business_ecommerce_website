import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {onChangeSupplierInput} from "../../redux/stateSlice/supplierSlice.js";

export const FillSupplierFormApiRequest  = async (objectId) => {

    let url = `${BASE_URL}/SupplierDetails/${objectId}`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            const { name, address, email, phone } = res.data['data'][0];

            store.dispatch(onChangeSupplierInput({Name: "name", Value: name}))
            store.dispatch(onChangeSupplierInput({Name: "email", Value: email}))
            store.dispatch(onChangeSupplierInput({Name: "phone", Value: phone}))
            store.dispatch(onChangeSupplierInput({Name: "address", Value: address}))

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