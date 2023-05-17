import { Query } from 'api/src';
enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type Endpoint<
  PATH extends string,
  METHOD extends keyof typeof Methods = keyof typeof Methods,
  PARAMS extends Record<string, any> | undefined = undefined,
  QUERY extends Query | undefined = undefined,
  REQUEST extends {} | undefined = undefined,
  RESPONSE extends {} | string = string,
  > = {
    path: PATH;
    method: METHOD;
    params?: PARAMS;
    query?: QUERY;
    request?: REQUEST;
    response: RESPONSE;
  };
