import { Role } from './role';
export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    status: string;
    roles: Role[];
    numberOfRatings: number;
    averageRating: number;
    safetyTrained: boolean;
    createdAt: number;
    _links?: any;
}
