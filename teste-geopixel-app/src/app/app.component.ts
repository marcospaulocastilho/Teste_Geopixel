import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-geopixel-app';

  nomes = ['marcos','paulo'];

incluir_dados(){
  this.nomes.push("#")
}

}
