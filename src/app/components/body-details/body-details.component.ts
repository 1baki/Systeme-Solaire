import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarSystemService } from '../../services/solar-system.service';
import { CelestialBody } from '../../models/celestial-body.model';

@Component({
  selector: 'app-body-details',
  standalone: true,
  imports: [CommonModule,],
  template: `
    <div class="details-panel" [class.visible]="selectedBody">
      @if (selectedBody) {
        <div class="content">
          <h2>{{selectedBody.name}}</h2>
          <div class="body-image">
            <div class="preview-sphere" 
                 [style.background-color]="selectedBody.color"></div>
          </div>
          <div class="stats">
            <p><strong>Type:</strong> {{selectedBody.type}}</p>
            <p><strong>Diamètre:</strong> {{selectedBody.diameter | number}} km</p>
            <p><strong>Distance du Soleil:</strong> {{selectedBody.distanceFromSun}} M km</p>
            <p><strong>Période orbitale:</strong> {{selectedBody.orbitalPeriod}} jours</p>
            <p><strong>Température moyenne:</strong> {{selectedBody.temperature}}°C</p>
          </div>
          <p class="description">{{selectedBody.description}}</p>
          <div class="composition">
            <h3>Composition:</h3>
            <ul>
              @for (element of selectedBody.composition; track element) {
                <li>{{element}}</li>
              }
            </ul>
          </div>
          <button (click)="closeDetails()">Fermer</button>
        </div>
      }
    </div>
  `,
  styles: [`
    .details-panel {
      position: fixed;
      right: -400px;
      top: 0;
      width: 400px;
      height: 100vh;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      transition: right 0.3s;
      padding: 20px;
      box-sizing: border-box;
    }

    .details-panel.visible {
      right: 0;
    }

    .content {
      height: 100%;
      overflow-y: auto;
    }

    .body-image {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }

    .preview-sphere {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
    }

    .stats {
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
    }

    button {
      background: #444;
      border: none;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      margin-top: 20px;
    }

    button:hover {
      background: #555;
    }
  `]
})
export class BodyDetailsComponent implements OnInit {
  selectedBody: CelestialBody | null = null;

  constructor(private solarService: SolarSystemService) {}

  ngOnInit() {
    this.solarService.getSelectedBody().subscribe(body => {
      this.selectedBody = body;
    });
  }

  closeDetails() {
    this.solarService.setSelectedBody(null);
  }
}