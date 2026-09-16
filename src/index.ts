export { IntacctClient, DEFAULT_BASE_URL, ENTITY_HEADER } from "./core/client.js";
export type { IntacctClientOptions, RetryOptions, CallOptions } from "./core/client.js";

export {
  ClientCredentials,
  RefreshToken,
  StaticToken,
  OAuthTokenProvider,
  MemoryTokenStore,
  DEFAULT_TOKEN_URL,
} from "./core/auth.js";
export type {
  TokenProvider,
  TokenStore,
  StoredToken,
  OAuthProviderOptions,
  ClientCredentialsOptions,
  RefreshTokenOptions,
  OAuthTokenResponse,
} from "./core/auth.js";

export {
  IntacctError,
  AuthenticationError,
  AuthorizationError,
  NotFoundError,
  ValidationError,
  ConflictError,
  RateLimitError,
  ServerError,
} from "./core/errors.js";
export type { IntacctErrorDetail, IntacctErrorInfo } from "./core/errors.js";

export { queryPage, queryAll, QUERY_PATH, MAX_PAGE_SIZE } from "./core/query.js";
export type {
  QuerySpec,
  QueryRequest,
  QueryRow,
  Filter,
  FilterParameters,
  FieldPath,
  Page,
  QueryAllOptions,
} from "./core/query.js";

export { ObjectResource } from "./core/resource.js";
export type { ObjectShape, ObjectOp } from "./core/resource.js";

export { defineApplication, object, parameterizedObject, singleton, action, service, group, shape } from "./core/define.js";
export type {
  RequestBody,
  ResponseResult,
  ShapeOf,
  ObjectDef,
  ParameterizedObjectDef,
  SingletonDef,
  SingletonOp,
  SingletonMethods,
  ActionDef,
  ServiceDef,
  ServiceGroupDef,
  Def,
  Resource,
  Application,
  Instantiate,
} from "./core/define.js";

export type { Envelope, Meta, PageMeta, ObjectReference, RequestOptions, HttpMethod, Fetch } from "./core/types.js";
