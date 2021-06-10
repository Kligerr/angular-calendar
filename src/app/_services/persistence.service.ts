import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { 
    const request: IDBOpenDBRequest = window.indexedDB.open("PurityDB", 1);

    request.onerror = (event) => { };
    request.onsuccess = (event: any) => { 
      const db = event.target.result;
    };
  }

  
}
