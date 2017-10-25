import { User } from './user';
import { Customer } from './customer';
import { Provider } from './provider';
import { Machine } from './machine';
import { Urgency } from './urgency';
import { AcceptedBid } from './accepted-bid';

export class ServiceRequest {
    id: number;
    status: string;
    description: string;
    needWithin: string;
    machine: Machine;
    numberOfBids: number;
    urgency: Urgency;
    acceptedBid: AcceptedBid;
    creator: User;
    technician: User;
    cancelledBy: User;
    customer: Customer;
    provider: Provider;
    createdAt: number;
    bidAcceptedAt: number;
    workBeganAt: number;
    completedAt: number;
    cancelledAt: number;
}
