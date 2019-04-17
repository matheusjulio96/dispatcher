import { DispatcherService } from './_services/dispatcher.service';
import { Component, OnInit } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dispatcher';

  lista = [];

  constructor(private dispatcherService: DispatcherService) {

  }

  ngOnInit() {
    this.inscrever();
  }

  emitir2() {
    this.dispatcherService.emitir();
    this.lista = this.lista.sort((a, b) => b - a);
    // this.lista.reverse();
  }

  inscrever(){
    this.dispatcherService.ev.subscribe((dados) =>{
      this.title = dados;
      console.log('dados: ' + dados);
      this.lista.push(dados);
      console.log(this.lista);
    });
  }
}
