import { Component } from '@angular/core';
import { DatePipe} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  name = 'Samuel Ruiz Martín';
  fecha = new Date();
}
