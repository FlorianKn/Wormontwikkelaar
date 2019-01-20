import { Appointment } from '../_models/appointment';
import { Technicians } from './mock-user';
import { Serviceproducts } from './mock-serviceproducts';
import { Customers } from './mock-customers';
import { ServiceOrderItems } from './mock-serviceOrderItem';

export const Appointments: Appointment[] = [
{
id: 1,
customer: Customers[0],
serviceProduct: Serviceproducts[0],
serviceDate: '02.12.2018',
plannedTimeRange: '1 day',
serviceOrderItems: ServiceOrderItems[0]
},
{
id: 2,
customer: Customers[1],
serviceProduct: Serviceproducts[1],
serviceDate: '03.12.2018',
plannedTimeRange: '2 days',
serviceOrderItems: ServiceOrderItems[0]
},
{
id: 3,
customer: Customers[2],
serviceProduct: Serviceproducts[0],
serviceDate: '05.12.2018',
plannedTimeRange: '1 day',
serviceOrderItems: ServiceOrderItems[0]
},
{
id: 4,
customer: Customers[3],
serviceProduct: Serviceproducts[0],
serviceDate: '10.12.2018',
plannedTimeRange: '5 days',
serviceOrderItems: ServiceOrderItems[2]
},
{
id: 5,
customer: Customers[4],
serviceProduct: Serviceproducts[0],
serviceDate: '13.12.2018',
plannedTimeRange: '1 day',
serviceOrderItems: ServiceOrderItems[0]
},
];
