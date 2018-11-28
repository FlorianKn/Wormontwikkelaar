import { Serviceproduct } from '../serviceproduct';

export const Serviceproducts: Serviceproduct[] = [
  { id: 0,
    name: "XYserver",
    description: "Windows server in E3",
    customerId: 0, // todo mock-customers
    serialNumber: "120392103u421",
    purchaseDate: new Date(),
    bom: null // todo mock-parts
    },

  { id: 1,
    name: "ZMachine",
    description: "THE MACHINE",
    customerId: 2, // todo mock-customers
    serialNumber: "432957324985",
    purchaseDate: new Date(),
    bom: null // todo mock-parts
    }

];