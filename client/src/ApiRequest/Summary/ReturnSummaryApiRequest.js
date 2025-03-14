import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {
    setReturnLast30Days,
    setReturnTotal,
} from "../../redux/stateSlice/dashboardSlice.js";

export const ReturnSummaryRequest  = async () => {

    let url = `${BASE_URL}/ReturnSummary`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {
            store.dispatch(setReturnTotal(res.data['data'][0]['Total'][0]['TotalAmount']));
            store.dispatch(setReturnLast30Days(res.data['data'][0]['Last30Days']));
            return { status: 'success', message: res.data['message'] };
        } else {
            store.dispatch(setReturnTotal(0));
            store.dispatch(setReturnLast30Days([]));
            return { status: 'fail', message: res.data['message'] };
        }
    } catch (e) {

        if (e.response && e.response.status === 401) {
            return { status: "fail", message: "User Unauthorized" };
        }

        return { status: "error", message: e.toString() };
    }
};