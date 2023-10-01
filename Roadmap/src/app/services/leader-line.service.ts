import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaderLineService {

  constructor() { }

  // What must this service do?
  // * This is a service that must first allow everything to finish initializing.
  // * Then it must loop through card components.
  // * It must then get elements by ID (on each of the card element).
  // * Later when you can add cards it should be able to refresh somehow.
  // * This should then be able to draw the leader-lines (using the leader-line package) between all the card components.

}
