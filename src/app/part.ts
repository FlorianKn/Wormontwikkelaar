export class Part {
  id: number;
  name: string;
  description: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
