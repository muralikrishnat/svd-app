import { Address } from './address';
import { ServiceArea } from './service-area';
import { ProviderType } from './provider-type';
export class Provider {
    id: number;
    name: string;
    insured: boolean;
    hasWorkersComp: boolean;
    address: Address[];
    type: ProviderType;
    serviceAreas: ServiceArea[];
    numberOfRatings: number;
    averageRating: number;
}
