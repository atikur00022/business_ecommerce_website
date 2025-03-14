import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {onChangeExpenseInput} from "../../redux/stateSlice/expenseSlice.js";

export const FillExpenseFormApiRequest  = async (objectId) => {

    let url = `${BASE_URL}/ExpenseDetails/${objectId}`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {

            const { typeID, note, amount } = res.data['data'][0];

            store.dispatch(onChangeExpenseInput({Name: "typeID", Value: typeID}));
            store.dispatch(onChangeExpenseInput({Name: "amount", Value: amount}));
            store.dispatch(onChangeExpenseInput({Name: "note", Value: note}));

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