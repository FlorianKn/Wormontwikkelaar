import { Customer } from './customer';
import { Geolocation } from './geolocation';

const g = new Geolocation();
g.lat = 123;
g.lng = 456;

const serviceProducts1: number[] = [1, 2];
const serviceHistory1: number[] = [1];

const serviceProducts2: number[] = [];
const serviceHistory2: number[] = [];

const serviceProducts3: number[] = [];
const serviceHistory3: number[] = [];

const serviceProducts4: number[] = [];
const serviceHistory4: number[] = [];

const serviceProducts5: number[] = [];
const serviceHistory5: number[] = [];

export const Customers: Customer[] = [
    { id: 1, name: 'Max Mustermann', geolocation : g, phone : '0123456', mail: 'mustermann@email.com',
    web : 'max.mustermann.com', address : 'Musterstraße 1, 23756 Musterhausen',
    serviceProducts: serviceProducts1, serviceHistory: serviceHistory1},
    { id: 2, name: 'Sarah Beispiel', geolocation : g, phone : '023536546', mail: 'sarah.beispiel@email.com',
    web : 'sarah.beispiel.com', address : 'Beispielstraße 3, 98462 Beispielstadt',
    serviceProducts: serviceProducts2, serviceHistory: serviceHistory2},
    { id: 3, name: 'Anna Nass', geolocation : g, phone : '05347756', mail: 'Annanass@email.com',
    web : 'annanass.com', address : 'Hangweg 76, 74246 Bremen',
    serviceProducts: serviceProducts3, serviceHistory: serviceHistory3},
    { id: 4, name: 'Dieter Müller', geolocation : g, phone : '0435656', mail: 'd.mueller@email.com',
    web : 'dietermueller.com', address : 'Adenauer-Ring 3, 57834 Muenchen',
    serviceProducts: serviceProducts4, serviceHistory: serviceHistory4},
    { id: 5, name: 'Donald Duck', geolocation : g, phone : '0364766', mail: 'duck@email.com',
    web : 'duck.com', address : 'Musterstraße 46, 75435 Karlsruhe',
    serviceProducts: serviceProducts5, serviceHistory: serviceHistory5}
];
