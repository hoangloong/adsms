import { gql } from 'apollo-angular';
import { User } from '@nhost/nhost-js';

export interface IStaffsQuery {
  limit: number;
  offset: number;
}

export interface IAddStaff {
  displayName: string;
  email: string;
  phoneNumber: string;
  passwordHash: string;
  emailVerified: boolean;
  phoneNumberVerified: boolean;
  locale: string;
}
