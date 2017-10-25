import { Address } from './address';
import { Manufacturer } from './manufacturer';
import { TechnologyType } from './technology-type';

export class Machine {
    id: number;
    isActive: boolean;
    modelNumber: string;
    serialNumber: string;
    controlType: string;
    manufacturer: Manufacturer;
    technologyType: TechnologyType;
    address: Address;
    createdAt: number;
}
