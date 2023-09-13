import { User } from '@nhost/nhost-js';

export interface IDepartment {
  id: string;
  description: string;
  name: string;
  staffs: User[];
  child: IDepartment[];
  createdUtcDate: string;
  modifiedUtcDate: string;
  modifiedBy: string;
}

export interface IAddDepartment {
  description: string;
  name: string;
  staffs: User[];
  child: IDepartment[];
  // modifiedBy: string;
}
