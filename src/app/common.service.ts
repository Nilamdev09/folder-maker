import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CommonService {

    constructor() { }
    generateUniqueId(): string {
        return new Date().getTime().toString();
    }
}
