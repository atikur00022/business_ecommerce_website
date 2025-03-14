import {BASE_URL} from "../../utility/Config.js";
import axios from "axios";

export const CategoryCreateRequest = async (postBody,objectId) => {

    let url = `${BASE_URL}/CreateCategory`;

    if(objectId !== null){
        url = `${BASE_URL}/UpdateCategory/${objectId}`;
    }

    try {
        let res = await axios.post(url, postBody,{
            withCredentials: true,
        });

        if (res.status === 200 && res.data['status'] === 'success') {
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