import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OrbitViewerComponent } from './components/orbit-viewer/orbit-viewer.component';
import { BodyDetailsComponent } from './components/body-details/body-details.component';


@Component({
  selector: 'app-root',
  
  standalone: true,
  imports: [RouterOutlet, CommonModule, OrbitViewerComponent,BodyDetailsComponent],
  template: ` <router-outlet></router-outlet> 
     
  
  `,
  styles: [],
})
export class AppComponent {}
