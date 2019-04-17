import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  ev = new EventEmitter<number>();

  contador = 0;

  constructor() {}

  emitir() {
    this.ev.emit(this.contador);
    this.contador++;
  }
}
