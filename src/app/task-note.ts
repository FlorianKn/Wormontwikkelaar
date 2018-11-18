export class TaskNote {
    constructor(
        public title: string,
        public status: string,
        public type: string,
        public creationDate: Date,
        public technicianId: number,
        public description?: string
      ) {  }
}
