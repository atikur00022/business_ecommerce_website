import axios from "axios";
import { BASE_URL } from "../../utility/Config.js";

export const CreateSaleRequest = async (parentBody, childBody) => {
    const url = `${BASE_URL}/CreateSales`;
    let postBody = { "parent": parentBody, "childs": childBody };

    try {
        let res = await axios.post(url, postBody, { withCredentials: true });

        if (res.status === 200 && res.data.status === "success") {
            const parentLength = res.data.parent?.length || 0;
            const childsLength = res.data.childs?.length || 0;

            if (parentLength > 0 || childsLength > 0) {
                return { status: "success", message: "Sale created successfully!" };
            } else {
                return { status: "fail", message: "No data returned from the server." };
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
