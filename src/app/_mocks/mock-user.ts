import { User } from '../_models/User';

// Die eigentlichen User stecken woanders, das hier sollte gelöscht werden
export const Technicians: User[] = [
  { id: 0, 
    email: "Nils.Bier@hs-karlsruhe.de",
    name: "Nils Bier",
    password: "BierForEver",
    phone: "0187 1234567",
    token: "1"},

  { id: 1, 
    email: "Nicole.Summer@hs-karlsruhe.de",
    name: "Nicole Summer",
    password: "TopSecret",
    phone: "0187 7654321",
    token: "2"}
];