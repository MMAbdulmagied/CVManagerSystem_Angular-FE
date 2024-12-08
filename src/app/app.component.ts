import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvListComponent } from "./CV/Components/cv-list/cv-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CvListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CV Manager';
}
