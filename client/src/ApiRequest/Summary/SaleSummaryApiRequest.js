import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {
    setSaleLast30Days,
    setSaleTotal,
} from "../../redux/stateSlice/dashboardSlice.js";

export const SaleSummaryRequest  = async () => {

    let url = `${BASE_URL}/SaleSummary`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {
            store.dispatch(setSaleTotal(res.data['data'][0]['Total'][0]['TotalAmount']));
            store.dispatch(setSaleLast30Days(res.data['data'][0]['Last30Days']));
            return { status: 'success', message: res.data['message'] };
        } else {
            store.dispatch(setSaleTotal(0));
            store.dispatch(setSaleLast30Days([]));
            return { status: 'fail', message: res.data['message'] };
        }
    } catch (e) {

        if (e.response && e.response.status === 401) {
            return { status: "fail", message: "User Unauthorized" };
        }

        return { status: "error", message: e.toString() };
    }
};