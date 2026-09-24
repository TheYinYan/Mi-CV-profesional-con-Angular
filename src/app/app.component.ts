import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Curriculum Vitae';

  name = 'Samuel Ruiz Martín';
  profession = 'Desarrollador de Aplicaciones Multiplataforma';
  about =
  'Soy un desarrollador de aplicaciones multiplataforma con experiencia en tecnologías como Angular, React y Node.js. Me gusta resolver problemas y crear soluciones innovadoras.';

  telephone = '+34 693 48 75 96';
  github = 'https://github.com/TheYinYan';
  correo = 'samuelruizmartin2412@gmail.com';
  location = 'Malaga, España';

  fecha = new Date();

  tenologias = [
    'Angular',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
  ];

  empresas = [
    {
      nombre: 'Navicom Informática',
      puesto: 'Tecnico de Sistemas Informáticos y Redes',
      periodo: '3 Meses',
      descripcion:
        'Trabajé en la instalación, configuración y mantenimiento de sistemas informáticos y redes, asegurando un funcionamiento óptimo de los equipos y la infraestructura tecnológica.',
    },
    {
      nombre: 'LD Quantum',
      puesto: 'Desarrollador para Aplicaciones Multiplataforma',
      periodo: '3 Meses',
      descripcion:
        'Trabajé en el desarrollo de aplicaciones multiplataforma utilizando lenguajes como TypeScript y JavaScript, creando experiencias de usuario consistentes en diferentes dispositivos.',
    }
  ];

}
