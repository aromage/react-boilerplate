/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export function isInstanceOfAPIError(object: unknown): object is ApiError {
  return (
    object instanceof ApiError &&
    ('redirectUrl' in object || 'notFound' in object)
  );
}

export class ApiError extends Error {
  constructor() {
    super();
    this.name = 'ApiError';
  }

  redirectUrl = '';

  notFound = false;
}

export class ClientError extends Error {
  constructor() {
    super();
    this.name = 'ClientError';
  }

  redirectUrl = '/dashboard/project';

  notFound = false;
}

export class NotFoundError extends ApiError {
  // constructor(public path: string) {
  //   super();
  //   this.path = path;
  // }
  name = 'NotFoundError';

  message = '잘못된 API 경로입니다.';

  notFound = true;
}

export class ForbiddenError extends ApiError {
  name = 'ForbiddenError';

  message = '인증처리에 실패했습니다.';

  redirectUrl = '/error';
}

export class BadRequestError extends ApiError {
  name = 'BadRequestError';

  message = 'Bad Request';

  redirectUrl = '/error';
}

export class AuthError extends ApiError {
  // constructor(public message: string) {
  //   super();
  //   this.message = message;
  // }
  name = 'AuthError';

  // message = '로그인이 필요한 페이지입니다.';

  redirectUrl = '/login';
}
