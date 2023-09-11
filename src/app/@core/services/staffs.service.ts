import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { gql } from 'apollo-angular';
import { nhost } from 'src/main';

@Injectable({ providedIn: 'root' })
export class StaffsService {
  constructor() {}

  getStaffs() {
    const CUSTOMERS = gql`
      {
        users(limit: 10, offset: 10) {
          createdDate
          description
          id
          modifiedBy
          modifiedDate
          name
        }
      }
    `;
    return from(nhost.graphql.request(CUSTOMERS));
  }
}
