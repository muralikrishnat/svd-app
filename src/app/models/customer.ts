import { User } from './user';
import { Address } from './address';
import { Manufacturer } from './manufacturer';
import { TechnologyType } from './technology-type';
export class Customer {
    id: number;
    name: string;
    addresses: Address[];
    owner: User;
    technologyTypes: TechnologyType[];
    manufacturers: Manufacturer[];
    _links: any;
}
