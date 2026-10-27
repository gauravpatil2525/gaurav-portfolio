
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'Gaurav Patil';
  role = 'Full-Stack Developer';

  email = 'gauravpatil8691@gmail.com';
  github = 'https://github.com/gauravpatil2525';
  linkedin = 'https://www.linkedin.com/in/gaurav-fullstack';

  skills: string[] = [
    'Angular',
    'Ionic',
    'React',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MySQL',
    'MSSQL',
    'SQLite',
    'REST APIs',
    'Git',
    'C#',
    'ASP.NET Core'
  ];

  projects = [
    {
      title: 'Smart Nagar Panchayat Management System',
      description:
        'A full-stack municipal management application designed to support citizen services and administrative workflows.',
      technologies: 'Angular · Node.js · Express.js · MySQL'
    },
    {
      title: 'Dairy Management System',
      description:
        'A dairy management application with product management, customer workflows and delivery modules.',
      technologies: 'Angular · Ionic · Node.js · MySQL'
    },
    {
      title: 'Hotel Management System',
      description:
        'A hotel management application covering booking, billing and user management.',
      technologies: 'Web Development · Database'
    }
  ];

  currentYear = new Date().getFullYear();
}
