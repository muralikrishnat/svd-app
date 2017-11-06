import { Injectable } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { SessionService } from './data/session.service';
import { UserService } from './user/user.service';
import { CustomerService } from './user/customer.service';
import { RegionService } from './region/region.service';
import { MachineService } from './machine/machine.service';

@Injectable()
export class AuxilaryService {


  constructor(
    private auth: AuthService
    , private session: SessionService
    , private user: UserService
    , private customer: CustomerService
    , private region: RegionService
    , private machine: MachineService
  ) {

  }

  setUserToCustomer(opts) {
    return this.customer.setUserToCustomer(opts);
  }
  getTechnologies() {
    return this.machine.getActiveTechnologyTypes();
  }

  getManufacturers() {
    return this.machine.getActiveManufacturers();
  }
  getDistricts(opts: { country: string, region: string }) {
    return this.region.getServicePlacesByStateAndContry(opts);
  }
  getStates() {
    return this.region.getAllStates();
  }
  addMachine(opts) {
    return this.customer.addMachine(opts);
  }
  getMachinesByCustomer(opts) {
    return this.customer.getMachinesByCustomer(opts);
  }

  updateCustomer(opts) {
    return this.customer.updateCustomer(opts);
  }
  getCustomersByOwnerEmail(opts) {
    return this.customer.getCustomersByOwnerEmail(opts);
  }
  login(opts) {
    opts.setAuthorization = true;
    return this.auth.login(opts);
  }

  authenticate() {
    return this.auth.authenticate();
  }

  getLoggedUser() {
    return new Promise((r, j) => {
      if (this.session.get('user')) {
        r({ user: this.session.get('user') });
      } else {
        this.authenticate().then(({ err, resp }) => {
          if (!err) {
            this.session.set('user', resp);
          }
          r({ err, user: resp });
        });
      }
    });
  }

  createUser(opts) {
    return new Promise((r, j) => {
      this.auth.getAdminAuthorization(opts).then((res: any) => {
        if (!res.err && res.authorization) {
          opts.headers = {
            'Authorization': res.authorization
          };
          this.user.createUser(opts).then(({ err, resp }) => {
            r({ err, resp });
          });
        } else {
          r({ err: res.err });
        }
      });
    });
  }

  resendVerifyCode(opts) {
    return this.user.resendVerificationCode(opts);
  }

  verifyAuthCode(opts) {
    return this.user.verifyUser(opts);
  }

  createCustomer(opts) {
    return new Promise((r, j) => {
      let updateUserPromse, createCustomerPromise;
      if (opts.id) {
        this.user.updateUser(opts).then(({ err, resp }) => {
          updateUserPromse = { err, resp };
          if (updateUserPromse && createCustomerPromise) {
            r({ err: updateUserPromse.err || createCustomerPromise.err });
          }
        });
        const teamName = opts.teamName;
        this.customer.addCustomer({ name: teamName || opts.name }).then(({ err, resp }) => {
          createCustomerPromise = { err, resp };
          if (updateUserPromse && createCustomerPromise) {
            r({ err: updateUserPromse.err || createCustomerPromise.err });
          }
        });
      } else {
        const teamName = opts.teamName;
        this.customer.addCustomer({ name: teamName || opts.name }).then(({ err, resp }) => {
          r({ err, resp });
        });
      }
    });
  }
}
