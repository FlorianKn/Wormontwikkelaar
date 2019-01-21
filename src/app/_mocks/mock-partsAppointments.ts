import { Parts } from '../_models/parts';
import { PARTLIST } from './mock-part';

// Mocks for Appointments
// separate from Warehouse because these are only planned
export const AppointmentParts1: Parts[] = [
    { id: 1, quantity: '5', unit: 'Paket', part: PARTLIST[0] },
    { id: 2, quantity: '2', unit: 'Meter', part: PARTLIST[1] },
    { id: 3, quantity: '1', unit: 'Schrauben', part: PARTLIST[2] }
];

export const AppointmentParts2: Parts[] = [
    { id: 1, quantity: '2', unit: 'Paket', part: PARTLIST[0] },
    { id: 2, quantity: '1', unit: 'Meter', part: PARTLIST[1] },
    { id: 3, quantity: '0', unit: 'Schrauben', part: PARTLIST[2] }
];

export const AppointmentParts3: Parts[] = [
    { id: 1, quantity: '0', unit: 'Paket', part: PARTLIST[0] },
    { id: 2, quantity: '0', unit: 'Meter', part: PARTLIST[1] },
    { id: 3, quantity: '1', unit: 'Schrauben', part: PARTLIST[2] }
];

