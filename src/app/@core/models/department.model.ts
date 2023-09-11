import { User } from '@nhost/nhost-js';

export interface Department {
  createdBy: User;
  createdUtcDate: string;
  departmentId: string;
  description: string;
  isDelete: boolean;
  modifiedUtcDate: string;
  name: string;
  users: User[];
  childDepartments?: Department[];
}
