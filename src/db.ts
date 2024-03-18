import Dexie, { Table } from 'dexie';

export interface User {
  id?: number;
  name: string;
  age: number;
}

export class MySubClassedDexie extends Dexie {
  users!: Table<User>;

  constructor() {
    super('platUser');
    this.version(1).stores({
      users: '++id, name, age' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();