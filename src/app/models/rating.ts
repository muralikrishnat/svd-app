import { User } from './user';
export class Rating {
    id: number;
    rating:number;
    description: string;
    technician: User;
    serviceRequest: any;
    createdAt: number;
    _links: any;

}
