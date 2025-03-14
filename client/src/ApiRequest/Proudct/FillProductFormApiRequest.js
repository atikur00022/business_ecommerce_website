import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {onChangeProductInput} from "../../redux/stateSlice/productSlice.js";

export const FillProductFormApiRequest  = async (objectId) => {

    let url = `${BASE_URL}/ProductDetails/${objectId}`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            const { name, unit, details, categoryId, brandId } = res.data['data'][0];

            store.dispatch(onChangeProductInput({Name: "name", Value: name}))
            store.dispatch(onChangeProductInput({Name: "unit", Value: unit}))
            store.dispatch(onChangeProductInput({Name: "details", Value: details}))
            store.dispatch(onChangeProductInput({Name: "categoryId", Value: categoryId}))
            store.dispatch(onChangeProductInput({Name: "brandId", Value: brandId}))

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