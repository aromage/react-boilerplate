import {
  UseMutationResult,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import {
  AuthenticateOtpLoginRequestBody,
  AuthenticateOTPRequestBody,
  LogoutRequestBody,
  RequestRegisterBody,
} from "types/auth";
import {
  authenticateOTPLogin,
  authenticateOTPsend,
  logout,
  register,
} from "./auth.api";
import { QUERY_KEY_FACTORY } from "services/queryKeys";

export const useRegister = (
  onSuccess?: any
): UseMutationResult<any, Error, RequestRegisterBody, number> => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_FACTORY("REGISTER").all],
    (requestBody) => register(requestBody),
    {
      onSettled: () =>
        queryClient.invalidateQueries(QUERY_KEY_FACTORY("REGISTER").all),
      onSuccess,
      onError: (error: any) => {
        const { name, message } = error;
        console.log(message);
      },
    }
  );
};

// export const useAuthenticate = (
//   onSuccess?: any
// ): UseMutationResult<any, Error, RequestAuthenticateBody, number> => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     [QUERY_KEY_FACTORY('AUTHENTICATE').all],
//     (requestBody) => authenticate(requestBody),
//     {
//       onSettled: () =>
//         queryClient.invalidateQueries(QUERY_KEY_FACTORY('AUTHENTICATE').all),
//       onSuccess,
//       onError: (error: any) => {
//         const { name, message } = error;
//         throw new Error();
//       },
//       // useErrorBoundary: true,
//     }
//   );
// };

// sjk branch code

// 회원인증 & otp 발송
export const useAuthenticateOTPSend = ({
  onSuccess,
  onError,
}: {
  onSuccess?: any;
  onError?: any;
}): UseMutationResult<any, Error, AuthenticateOTPRequestBody, number> => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_FACTORY("AUTHENTICATE").all],
    (requestBody) => authenticateOTPsend(requestBody),
    {
      onSettled: () =>
        queryClient.invalidateQueries(QUERY_KEY_FACTORY("AUTHENTICATE").all),
      onSuccess,
      onError: (error: any) => {
        const { name, message } = error;
        if (onError) {
          onError(error);
        }
      },
      // onError: (error: any) => {
      //   const { name, message } = error;
      //   // throw new Error();
      //   alert('사번 혹은 비밀번호가 일치하지 않습니다.');
      // },
      // useErrorBoundary: true,
    }
  );
};

// otp 인증 & 로그인
export const useAuthenticateOTPLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess?: any;
  onError?: any;
}): UseMutationResult<any, any, AuthenticateOtpLoginRequestBody, number> => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_FACTORY("AUTHENTICATE").all],
    (requestBody) => authenticateOTPLogin(requestBody),
    {
      onSettled: () =>
        queryClient.invalidateQueries(QUERY_KEY_FACTORY("AUTHENTICATE").all),
      onSuccess,
      onError: (error: any) => {
        if (onError) {
          onError(error);
        }
      },
      //useErrorBoundary: true,
    }
  );
};

// 로그아웃

export const useLogout = (
  onSuccess?: any
): UseMutationResult<any, Error, LogoutRequestBody, number> => {
  const queryClient = useQueryClient();

  return useMutation(
    [QUERY_KEY_FACTORY("AUTHENTICATE").all],
    (requestBody) => logout(requestBody),
    {
      onSettled: () =>
        queryClient.invalidateQueries(QUERY_KEY_FACTORY("AUTHENTICATE").all),
      onSuccess,
      onError: (error: any) => {
        const { name, message } = error;
        throw new Error();
      },
      // useErrorBoundary: true,
    }
  );
};
