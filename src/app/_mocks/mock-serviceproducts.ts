import { Serviceproduct } from '../_models/serviceproduct';
import { Parts } from '../_models/parts';
import { PARTLIST } from './mock-part';

const pts1 = new Parts();
pts1.id = 1;
pts1.part = PARTLIST[1]; // Schrauben
pts1.quantity = '5';
pts1.unit = 'STK';

const pts2 = new Parts();
pts2.id = 1;
pts2.part = PARTLIST[2]; // Säge
pts2.quantity = '1';
pts2.unit = 'STK';

export const Serviceproducts: Serviceproduct[] = [
    {id: 1, name: 'Befestigung Regal', description: 'Regal an Wand festschrauben', customerId: 1,
    serialNumber: 'SN0742836491', purchaseDate: new Date('January 31 2018 12:30'), bom: pts1},
    {id: 2, name: 'Holz kürzen', description: 'Ein Stück Holz kürzen', customerId: 2,
    serialNumber: 'SN6392749292', purchaseDate: new Date('March 03 2018 08:00'), bom: pts2}
];
