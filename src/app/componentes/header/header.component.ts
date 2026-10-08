import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  profession = 'Desarrollador de Aplicaciones Multiplataforma';
  nombre = input<string>();

  activarExp = output<boolean>();
  activarRes = output<boolean>();
  activarForm = output<boolean>();

  onClickResumen() {
    this.activarRes.emit(true);
  }
  onClickExperiencia() {
    this.activarExp.emit(true);
  }
  onClickFormacion() {
    this.activarForm.emit(true)
  }
}
