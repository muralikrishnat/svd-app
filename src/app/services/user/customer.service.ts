import { Injectable } from '@angular/core';
import { ApiService, Opts } from '../api.service';

@Injectable()
export class CustomerService {

  constructor(
    private api: ApiService
  ) { }


  addNewAddress(opts) {
    if (opts.customerid) {

    } else {
      return new Promise((r, e) => {
        r({
          err: {
            code: 400,
            msg: 'user id is required'
          }
        });
      });
    }
  }

  getCustomersByOwnerEmail(opts) {
    return this.api.get({
      url: '/customers/search/findByOwner?email=' + encodeURIComponent(opts.owneremail)
    });
  }

  // Join Team API
  setUserToCustomer(opts) {
    return this.api.post({
      url: '/users/' + opts.userid + '/customer',
      data: {
        id: opts.customerid
      }
    });
  }

  getCustomersByUser(opts) {
    return this.api.get({
      url: '/users/' + opts.userid + '/customer'
    });
  }

  getUsersByCustomer(opts) {
    return this.api.get({
      url: '/customers/' + opts.customerid + '/users'
    });
  }

  getCustomer(opts) {
    return this.api.get({
      url: '/customers/' + opts.id
    });
  }

  addCustomer(opts) {
    return this.api.post({
      url: '/customers',
      data: {
        name: opts.name || ''
      }
    });
  }

  getMachinesByCustomer(opts) {
    return this.api.get({
      url: '/customers/' + opts.customerid + '/machines'
    });
  }

  updateCustomer(opts) {
    const updateData: any = {};
    if (opts.address) {
      updateData.addresses = [];
      updateData.addresses.push(opts.address);
    }
    return this.api.patch({
      url: 'customers/' + opts.customerid,
      data: updateData
    });
  }

  addMachine(opts) {
    if (opts.newMachine.manufacturer) {
      opts.newMachine.manufacturer.id = parseInt(opts.newMachine.manufacturer.id, 10);
    }
    if (opts.newMachine.technologyType) {
      opts.newMachine.technologyType.id = parseInt(opts.newMachine.technologyType.id, 10);
    }
    return this.api.post({
      url: 'customers/' + opts.customerid + '/machines',
      data: opts.newMachine
    });
  }

  getManufacturers() {
    return this.api.get({
      url: '/manufacturers'
    });
  }

  getTechnologyTypes() {
    return this.api.get({
      url: '/technologyTypes'
    });
  }
}
