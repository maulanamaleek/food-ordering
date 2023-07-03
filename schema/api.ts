
export enum E_RESPONSE_CODE {
  SUCCESS = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

export interface IResponse<T = any> {
  data: T;
  code: E_RESPONSE_CODE;
  message: string | null;
}