import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";
import store from "../../redux/store/Store.js";
import {setReturnReportByDateList} from "../../redux/stateSlice/reportSlice.js";

export const ReturnReportApiRequest = async (formDate, toDate) => {

    let url = `${BASE_URL}/ReturnReport`;

    try {

        let postBody = {"formDate": formDate + "T00:00:00.000+00:00", "toDate": toDate + "T00:00:00.000+00:00"};

        let res = await axios.post(url, postBody,{
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {
            store.dispatch(setReturnReportByDateList(res.data['data']));
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