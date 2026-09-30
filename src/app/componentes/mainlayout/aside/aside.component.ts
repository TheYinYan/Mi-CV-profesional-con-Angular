import { Component } from '@angular/core';
import {NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-aside',
  imports: [NgOptimizedImage],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {
  name = 'Samuel Ruiz Martín';
  telephone = '+34 693 48 75 96';
  github = 'https://github.com/TheYinYan';
  correo = 'samuelruizmartin2412@gmail.com';
  location = 'Malaga, España';
}
