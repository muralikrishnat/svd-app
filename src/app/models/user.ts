import { Role } from './role';
export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email: string;
    password?: string;
    phone?: string;
    defaultAddressId?: any;
    status?: string;
    roles?: Role[];
    numberOfRatings?: number;
    averageRating?: number;
    safetyTrained?: boolean;
    createdAt?: number;
    _links?: any;
}

export class LoginModel {
    email: string;
    password: string;
}
