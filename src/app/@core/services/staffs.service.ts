import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { gql } from 'apollo-angular';
import { nhost } from 'src/main';
import { User } from '@nhost/nhost-js';
import { IGraphQLRes } from '../models/api-response.model';
import { IAddStaff } from '../models/staffs.model';

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

  addStaff(staff: IAddStaff) {
    const ADD_STAFF = gql`
      mutation insertUser($staff: users_insert_input!) {
        insertUser(object: $staff) {
          id
        }
      }
    `;
    return from(nhost.graphql.request(ADD_STAFF, { staff }));
  }

  deleteStaffs(staffIds: string[]) {
    const DELETE_STAFFS = gql`
      mutation deleteStaffs($ids: [uuid!]) {
        deleteUsers(where: { id: { _in: $ids } }) {
          returning {
            displayName
          }
        }
      }
    `;

    return from(
      nhost.graphql.request(DELETE_STAFFS, {
        ids: staffIds,
      })
    );
  }
}
