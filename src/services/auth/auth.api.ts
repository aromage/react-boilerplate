import { axiosGeneralAPI } from 'services';
import {
  AuthenticateOtpLoginRequestBody,
  AuthenticateOTPRequestBody,
  LogoutRequestBody,
  RequestRegisterBody,
} from 'types/auth';

export async function register(requestBody: RequestRegisterBody) {
  const { data } = await axiosGeneralAPI().post('/auth/register', requestBody);

  return data;
}


export async function logout(requestBody: LogoutRequestBody) {
  const { data } = await axiosGeneralAPI().post('/users/logout', requestBody);

  return data;
}

// sjk branch code

// 회원 인증 & OTP 발송

export async function authenticateOTPsend(
  requestBody: AuthenticateOTPRequestBody
) {
  const { data } = await axiosGeneralAPI().post(
    '/auth/authenticate',
    requestBody
  );

  return data;
}

// OTP 인증 & 로그인

export async function authenticateOTPLogin(
  requestBody: AuthenticateOtpLoginRequestBody
) {
  const { data } = await axiosGeneralAPI().post(
    '/auth/authenticate/otp',
    requestBody
  );

  return data;
}
