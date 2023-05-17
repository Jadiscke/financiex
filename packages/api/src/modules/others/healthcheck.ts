import { Endpoint } from 'api/src';

export type HealthCheckEndpoint = Endpoint<'/healthcheck', 'GET', undefined, undefined, undefined, HealthCheckResponse>;

export type HealthCheckResponse = string;