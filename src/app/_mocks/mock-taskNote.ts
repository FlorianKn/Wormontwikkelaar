import { TaskNote } from '../_models/task-note';

export const Status: String[] = ['Open', 'Finished'];
export const Type: String[] = ['Task', 'Note'];

export const TasksNotes: TaskNote[] = [
    { title: 'Befestigung Regal', description: 'Herr Müllers Regal ist um 20cm zu lange und muss gekürzt werden.', type: Type[0],
      creationDate: new Date(2018, 11, 24, 10, 33), status: Status[0]},
     { title: 'Rückruf Chef', description: 'Rücksprache mit Chef zwecks Mittagstermin.', type: Type[1],
      creationDate: new Date(2018, 10, 12, 10, 5), status: Status[0]},
     { title: 'Tägliche Yoga Übung', description: 'Nicht vergessen!', type: Type[0],
      creationDate: new Date(2018, 12, 2, 13, 37), status: Status[0]},
     { title: 'Urlaub eintragen', description: 'Urlaub für den Sommer einreichen. 20.-27. Juli.', type: Type[1],
      creationDate: new Date(2018, 11, 30, 8, 36), status: Status[0]},
     { title: 'Lager reparieren lassen', description: 'Lager in Fahrzeug reparieren lassen. Schloss defekt.', type: Type[0],
      creationDate: new Date(2018, 10, 10, 10, 10), status: Status[1]},
      { title: 'TÜV Termin Servicefahrzeug', description: '', type: Type[0],
      creationDate: new Date(2018, 10, 10, 10, 10), status: Status[1]},
      { title: 'Rückruf Herr Müller', description: '', type: Type[0],
      creationDate: new Date(2018, 10, 10, 10, 10), status: Status[1]},
      { title: 'Chef anrufen', description: 'Termin für Jahresgespräch ausmachen.', type: Type[0],
       creationDate: new Date(2018, 10, 10, 10, 10), status: Status[1]},
       { title: 'Memo an mich selbst', description: 'Neue Staffel GOT!', type: Type[0],
      creationDate: new Date(2018, 10, 10, 10, 10), status: Status[1]}
];
