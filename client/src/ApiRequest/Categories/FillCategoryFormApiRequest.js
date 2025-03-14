import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {onChangeCategoryInput} from "../../redux/stateSlice/categorySlice.js";

export const FillCategoryFormApiRequest  = async (objectId) => {

    let url = `${BASE_URL}/CategoryDetails/${objectId}`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            const { name } = res.data['data'][0];

            store.dispatch(onChangeCategoryInput({Name: "name", Value: name}))

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