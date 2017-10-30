import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';
import { User } from '../../models/user';

@Injectable()
export class UserService {

  constructor(
    private api: ApiService
  ) { }

  create(user: User) {
    return this.api.post({
      url: '/users',
      data: user
    } as Opts);
  }
}
