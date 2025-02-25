import UserCreateService from "../../services/users/UserCreateService.js"
import UserLoginService from "../../services/users/UserLoginService.js";
import {UserDetailsService} from "../../services/users/UserDetailsService.js";
import {UserVerifyEmailService} from "../../services/users/UserVerifyEmailService.js";
import {UserVerifyOtpService} from "../../services/users/UserVerifyOtpService.js";
import {UserResetPassService} from "../../services/users/UserResetPassService.js";
import {UserUpdateService} from "../../services/users/UserUpdateService.js";
import UserLogoutService from "../../services/users/UserLogoutService.js";

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

// Logout
export const Logout = async (req, res) => {
    const result = await UserLogoutService(req, res);
    res.json(result);
}

// Details
export const Details = async (req, res) => {
    const result = await UserDetailsService(req, res);
    res.json(result);
}

// Email Verify
export const EmailVerify = async (req, res) => {
    const result = await UserVerifyEmailService(req, res);
    res.json(result);
}

// Otp Verify
export const VerifyOtp = async (req, res) => {
    const result = await UserVerifyOtpService(req, res);
    res.json(result);
}

// Reset Password
export const ResetPassword = async (req, res) => {
    const result = await UserResetPassService(req, res);
    res.json(result);
}

// Profile Update
export const ProfileUpdate = async (req, res) => {
    const result = await UserUpdateService(req, res);
    res.json(result);
}




























