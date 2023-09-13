import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { gql } from 'apollo-angular';
import { nhost } from 'src/main';
import { User } from '@nhost/nhost-js';
import { IGraphQLRes } from '../models/api-response.model';

@Injectable({ providedIn: 'root' })
export class StaffsService {
  constructor() {}

  getStaffs(limit: number, offset: number, userField: string) {
    const GET_STAFFS = gql`
      query staffs($limit: Int = 10, $offset: Int = 0) {
        users(limit: $limit, offset: $offset) {
          ${userField}
        }
      }
    `;
    return from(
      nhost.graphql.request<IGraphQLRes<User[]>>(GET_STAFFS, {
        limit,
        offset,
      })
    );
  }

  addStaff() {
    const ADD_STAFF = gql`
      mutation MyMutation {
        insertUser(
          object: {
            displayName: "Tạ Hoàng Long"
            email: "qml0204@gmail.com"
            emailVerified: true
            phoneNumber: "0344464222"
            phoneNumberVerified: true
            locale: "vi"
          }
        ) {
          id
        }
      }
    `;
    return from(nhost.graphql.request<IGraphQLRes<User[]>>(ADD_STAFF));
  }
}
