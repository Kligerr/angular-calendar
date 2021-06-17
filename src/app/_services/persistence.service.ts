import { Injectable } from '@angular/core';
import { Period } from '@app/_models/index';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  private db: IDBDatabase = null;

  constructor() { 
    const request: IDBOpenDBRequest = window.indexedDB.open("PurityDB", 1);

    request.onerror = (event) => { };
    request.onsuccess = (event: any) => { 
      this.db = event.target.result;
    };
    
    request.onupgradeneeded = (event: any) => { 
      this.db = event.target.result;

      const objectStore = this.db.createObjectStore("periods", { 
        autoIncrement: true 
      });

      objectStore.createIndex("start", "start", { unique: true });

      objectStore.transaction.oncomplete = (event) => { }
    }
  }
  
  public addPeriod(period: Period) {
    const transaction = this.db.transaction("periods", "readwrite");
    const objectStore = transaction.objectStore("periods");

    const request = objectStore.add(period);
    request.onsuccess = (event) => {
      console.log("success");
    }
    
    transaction.oncomplete = (event) => {
      console.log("Period has been created");
    }

    transaction.onerror = (event) => {
      console.log("Creation failed");
    }
  }
}
