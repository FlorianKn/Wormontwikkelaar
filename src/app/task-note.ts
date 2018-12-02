export class TaskNote {
    constructor(
        public title: String,
        public status: String,
        public type: String,
        public creationDate: Date,
        public description?: String
      ) {  }
}
