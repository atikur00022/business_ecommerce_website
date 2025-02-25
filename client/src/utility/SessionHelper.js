class SessionHelper {

    setToken(token) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    setUserDetails(userDetails){
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

    getUserDetails(){
        return JSON.parse(localStorage.getItem('userDetails'));
    }

    removeSession(){
        localStorage.clear()
        window.location.href="/login";
    }

    setLoginStatus(status) {
        localStorage.setItem('isLogin', status);
    }

    getLoginStatus() {
        return localStorage.getItem('isLogin');
    }

    setUserUrl(url) {
        localStorage.setItem('url', url);
    }

    getUserUrl() {
        return localStorage.getItem('url');
    }

}

export const { setToken, getToken, setUserDetails, getUserDetails, removeSession, setLoginStatus, getLoginStatus, setUserUrl, getUserUrl } = new SessionHelper();