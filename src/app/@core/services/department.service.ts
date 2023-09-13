import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { from } from 'rxjs';
import { nhost } from 'src/main';
import { IGraphQLRes } from '../models/api-response.model';
import { IAddDepartment, IDepartment } from '../models/department.model';

@Injectable({
  providedIn: 'root',
})
export class DeparmentService {
  getDepartments(limit: number, offset: number, fieldQuery: string) {
    const GET_DEPARTMENTS = gql`
      query departments($limit: Int = 10, $offset: Int = 0) {
        departments(limit: $limit, offset: $offset) {
          ${fieldQuery}
        }
      }
    `;
    return from(
      nhost.graphql.request<IGraphQLRes<IDepartment[]>>(GET_DEPARTMENTS, {
        limit,
        offset,
      })
    );
  }

  addDepartments(departments: IAddDepartment[]) {
    const ADD_STAFF = gql`
      mutation insertDepartments(
        $departments: [departments_insert_input!] = {}
      ) {
        insert_departments(objects: $departments) {
          returning {
            id
          }
        }
      }
    `;
    return from(nhost.graphql.request(ADD_STAFF, { departments }));
  }
}
