import { Customer } from './customer';
import { Geolocation } from './geolocation';


const g = new Geolocation();
g.lat = 123;
g.lng = 456;

export const Customers: Customer[] = [
    { id: 1, name: "Max Mustermann", geolocation : g, phone : "0123456", mail:"mustermann@email.com", web :"max.mustermann.com", address : "Musterstraße 1, 23756 Musterhausen"},
    { id: 2, name: "Sarah Beispiel", geolocation : g, phone : "023536546", mail:"sarah.beispiel@email.com", web :"sarah.beispiel.com", address : "Beispielstraße 3, 98462 Beispielstadt"},
    { id: 3, name: "Anna Nass", geolocation : g, phone : "05347756", mail:"Annanass@email.com", web :"annanass.com", address : "Hangweg 76, 74246 Bremen"},
    { id: 4, name: "Dieter Müller", geolocation : g, phone : "0435656", mail:"d.mueller@email.com", web :"dietermueller.com", address : "Adenauer-Ring 3, 57834 Muenchen"},
    { id: 5, name: "Donald Duck", geolocation : g, phone : "0364766", mail:"duck@email.com", web :"duck.com", address : "Musterstraße 46, 75435 Karlsruhe"}
]; 