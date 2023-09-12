import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { gql } from 'apollo-angular';
import { nhost } from 'src/main';

@Injectable({ providedIn: 'root' })
export class StaffsService {
  constructor() {}

  getStaffs(limit: number, offset: number) {
    const GET_STAFFS = gql`
      query staffs($limit: Int, $offset: Int) {
        users(limit: $limit, offset: $offset) {
          id
        }
      }
    `;
    return from(nhost.graphql.request(GET_STAFFS, { limit, offset }));
  }
}
