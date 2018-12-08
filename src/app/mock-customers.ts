import { Customer } from './customer';
import { Geolocation } from './geolocation';

const g1 = new Geolocation();
g1.lat = 49.015348;
g1.lng = 8.390344;

const g2 = new Geolocation();
g2.lat = 53.553895;
g2.lng = 9.991746;

const g3 = new Geolocation();
g3.lat = 48.137131;
g3.lng = 11.575233;

const g4 = new Geolocation();
g4.lat = 47.664585;
g4.lng = 9.208795;

const g5 = new Geolocation();
g5.lat = 49.013441;
g5.lng = 8.404413;

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
    { id: 1, name: 'Max Mustermann', geolocation : g1, phone : '0123456', mail: 'mustermann@email.com',
    web : 'max.mustermann.com', address : 'Moltkestraße 30, 76133 Karlsruhe',
    serviceProducts: serviceProducts1, serviceHistory: serviceHistory1},
    { id: 2, name: 'Sarah Beispiel', geolocation : g2, phone : '023536546', mail: 'sarah.beispiel@email.com',
    web : 'sarah.beispiel.com', address : 'Jungfernstieg 16, 20354 Hamburg',
    serviceProducts: serviceProducts2, serviceHistory: serviceHistory2},
    { id: 3, name: 'Anna Nass', geolocation : g3, phone : '05347756', mail: 'Annanass@email.com',
    web : 'annanass.com', address : 'Marienplatz 25, 80331 München',
    serviceProducts: serviceProducts3, serviceHistory: serviceHistory3},
    { id: 4, name: 'Dieter Müller', geolocation : g4, phone : '0435656', mail: 'd.mueller@email.com',
    web : 'dietermueller.com', address : 'Wilhelm-von-Scholz-Weg 2, 78464 Konstanz',
    serviceProducts: serviceProducts4, serviceHistory: serviceHistory4},
    { id: 5, name: 'Donald Duck', geolocation : g5, phone : '0364766', mail: 'duck@email.com',
    web : 'duck.com', address : 'Schloßbezirk 10, 76131 Karlsruhe',
    serviceProducts: serviceProducts5, serviceHistory: serviceHistory5}
];
