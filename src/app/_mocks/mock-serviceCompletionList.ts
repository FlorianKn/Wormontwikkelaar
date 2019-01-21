import { ServiceCompletion } from '../_models/serviceCompletion';
//import { ServiceCompletion } from '../_models/serviceCompletion'
import { Customers } from './mock-customers';
import { Serviceproducts } from './mock-serviceproducts';
import { SERVICECOMPLETIONPARTS1, SERVICECOMPLETIONPARTS2, SERVICECOMPLETIONPARTS3 } from './mock-partsServiceCompletionObject';


export const SERVICECOMPLETIONLIST: ServiceCompletion[] = [
{
    id: 1,
    customer: Customers[0],
    serviceProduct: Serviceproducts[0],
    serviceDate: '02.12.2018',
    realTimeRange: '1 day',
    signature: 'Eberhardt',
    usedServiceOrderItems: SERVICECOMPLETIONPARTS1
},{
    id: 2,
    customer: Customers[1],
    serviceProduct: Serviceproducts[1],
    serviceDate: '04.12.2018',
    realTimeRange: '5 days',
    signature: 'Silly Silke',
    usedServiceOrderItems: SERVICECOMPLETIONPARTS2
},{
    id: 3,
    customer: Customers[2],
    serviceProduct: Serviceproducts[1],
    serviceDate: '10.12.2018',
    realTimeRange: '2 day',
    signature: 'Lola Lollipop',
    usedServiceOrderItems: SERVICECOMPLETIONPARTS3
    },
];