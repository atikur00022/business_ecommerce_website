import UserCreateService from "../../services/users/UserCreateService.js"
import UserLoginService from "../../services/users/UserLoginService.js";

// Registration
export const Registration = async (req, res) => {
    const result = await UserCreateService(req);
    res.json(result);
}

// Login
export const Login = async (req, res) => {
    const result = await UserLoginService(req, res);
    res.json(result);
}