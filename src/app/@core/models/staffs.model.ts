import { gql } from 'apollo-angular';
import { User } from '@nhost/nhost-js';

export interface IStaffsQuery {
  limit: number;
  offset: number;
}
