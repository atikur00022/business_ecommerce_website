import store from "../../redux/store/Store.js";
import axios from "axios";
import {removeSession, setLoginStatus, setUserDetails} from "../../utility/SessionHelper.js";
import {BASE_URL} from "../../utility/Config.js";
import {setProfile} from "../../redux/stateSlice/profileSlice.js";


// Registration
export const RegistrationRequest = async (postBody) => {

    const url = BASE_URL + '/Registration';
    try {
        let res = await axios.post(url, postBody);



        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
};

// Login
export const LoginRequest = async (postBody) => {

    const url = BASE_URL + '/Login';
    try {
        let res = await axios.post(url, postBody,{
            withCredentials: true,
        });


        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                // setToken(res.data['data']['token']);

                setLoginStatus(true);
                setUserDetails(res.data['data']);
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// Logout
export const LogoutRequest = async () => {

    const url = BASE_URL + '/Logout';
    try {
        let res = await axios.post(url, {},{
            withCredentials: true,
        });


        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {

                removeSession();
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// Email Verify
export const EmailVerifyRequest = async (email) => {

    const url = `${BASE_URL}/EmailVerify/${email}`;

    try {
        let res = await axios.post(url, {},{
            withCredentials: true,
        });


        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// OTP Verify
export const OtpVerifyRequest = async (email, otp) => {

    const url = `${BASE_URL}/VerifyOtp/${email}/${otp}`;

    try {
        let res = await axios.post(url, {},{
            withCredentials: true,
        });


        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// Reset Password
export const ResetPasswordRequest = async (postBody) => {

    const url = `${BASE_URL}/ResetPassword`;

    try {
        let res = await axios.post(url, postBody,{
            withCredentials: true,
        });

        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// Profile Details
export const ProfileDetailsRequest = async () => {

    const url = `${BASE_URL}/Details`;

    try {
        let res = await axios.get(url, {
            withCredentials: true,
        });

        console.log("user data check", res.data['data'][0]);

        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                store.dispatch(setProfile(res.data['data'][0]));
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}

// Update Profile Details
export const UpdateProfileDetailsRequest = async (postBody) => {

    const url = `${BASE_URL}/ProfileUpdate`;

    try {
        let res = await axios.post(url, postBody,{
            withCredentials: true,
        })

        console.log("super admin data check", postBody);

        if (res.status === 200) {

            if (res.data['status'] === 'fail') {
                return { status: 'fail', message: res.data['message'] };
            } else {
                setUserDetails(postBody);
                return { status: 'success', message: res.data['message'] };
            }

        } else {

            return { status: 'fail', message: "Unexpected HTTP response!" };
        }
    } catch (e) {

        return { status: 'error', message: e.toString() };
    }
}





















