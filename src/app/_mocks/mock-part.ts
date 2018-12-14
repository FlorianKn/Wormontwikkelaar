import { Part } from '../_models/part';
import { Parts } from '../_models/parts';

export const PARTLIST: Part[] = [
    { id: 1, name: 'Schrauben', description: ' 10er Schrauben' },
    { id: 2, name: 'Kabel', description: 'Kabel' },
    { id: 3, name: 'Sensor', description: 'Optsensor' }
];


export const PARTSLIST: Parts[] = [
    { id: 1, quantity: '5', unit: 'Paket', part: PARTLIST[0] },
    { id: 2, quantity: '2', unit: 'Meter', part: PARTLIST[1] },
    { id: 3, quantity: '1', unit: 'Schrauben', part: PARTLIST[2] }

];
