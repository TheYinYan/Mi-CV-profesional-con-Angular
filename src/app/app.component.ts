import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { MainlayoutComponent } from './componentes/mainlayout/mainlayout.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainlayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'Samuel Ruiz Martín';

  activarExp = false;
  activarRes = false;
  activarForm = false;

  onActivarExp(activar: boolean) {
    this.activarExp = activar;
  }

  onActivarRes(activar: boolean) {
    this.activarRes = activar;
  }

  onActivarForm(activar: boolean) {
    this.activarForm = activar;
  }
}
