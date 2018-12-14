export class Warehouse {
  id: number;
  name: string;
  description: string;
  technican: string; // later reference to technican-class

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
