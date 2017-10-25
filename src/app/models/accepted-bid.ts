import { Provider } from './provider';
import { User } from './user';
export class AcceptedBid {
    id: number;
    status: string;
    rate: number;
    currency: string;
    notes: string;
    createdAt: number;
    acceptedAt: number;
    arrivalExpectedDate: string;
    factoryTrained: boolean;
    provider: Provider;
    creator: User;
    technician: User;
    _link: any;
}
