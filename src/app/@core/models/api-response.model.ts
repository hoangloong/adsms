import { ErrorPayload } from '@nhost/nhost-js';
import { GraphQLError } from 'graphql';

export interface IGraphQLRes<T> {
  [key: string]: T;
}
