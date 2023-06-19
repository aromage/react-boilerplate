/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export function isInstanceOfAPIError(object: unknown): object is ApiError {
  return (
    object instanceof ApiError &&
    ("redirectUrl" in object || "notFound" in object)
  );
}

export type ErrorProps = {
  title?: string;
  message?: string;
  redirectUrl?: string;
  code?: string;
};

export class ApiError extends Error {
  constructor() {
    super();
    this.name = "ApiError";
  }

  redirectUrl = "";
  title = "ApiError";
  code = "";
  notFound = false;
}

export class NetworkError extends Error {
  constructor() {
    super();
    this.name = "NetworkError";
  }

  title = "네트워크 에러";
  content = "연결을 확인해주세요";
}

export class ClientError extends Error {
  constructor() {
    super();
    this.name = "ClientError";
  }

  redirectUrl = "/dashboard/project";

  notFound = false;
}

export class NotFoundError extends ApiError {
  // constructor(public path: string) {
  //   super()
  //   this.path = path
  // }
  name = "NotFoundError";

  message = "잘못된 API 경로입니다.";

  notFound = true;
}

export class ForbiddenError extends ApiError {
  name = "ForbiddenError";

  message = "인증처리에 실패했습니다.";

  redirectUrl = "/error";
}

export class BadRequestError extends ApiError {
  constructor(props: ErrorProps) {
    super();
    this.name = "BadRequestError";
    this.title = props.title ?? "BadRequestError";
    this.message = props.message ?? "Bad Request";
    this.redirectUrl = props.redirectUrl ?? "/error";
    this.code = props.code ?? "";
  }
}

export class AuthError extends ApiError {
  name = "AuthError";

  message = "Auth Error";

  redirectUrl = "/login";
}

export class ServerError extends ApiError {
  constructor({ title, message, redirectUrl }: ErrorProps) {
    super();
    this.name = "ServerError";
    this.title = title ?? "ServerError";
    this.message = message ?? "서버 에러";
    this.redirectUrl = redirectUrl ?? "";
  }
}

export class OtpError extends ApiError {
  constructor(props: ErrorProps) {
    super();
    this.name = "OtpError";
    this.title = props.title ?? "OtpError";
    this.message = props.message ?? "Invalid OTP";
    this.redirectUrl = props.redirectUrl ?? "";
    this.code = props.code ?? "";
  }
}

export class LoginError extends ApiError {
  constructor(props: ErrorProps) {
    super();
    this.name = "LoginError";
    this.title = props.title ?? "LoginError";
    this.message = props.message ?? "Invalid Login";
    this.redirectUrl = props.redirectUrl ?? "";
    this.code = props.code ?? "";
  }
}
