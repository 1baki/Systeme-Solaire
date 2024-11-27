import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolarSystemService } from '../../services/solar-system.service';
import { CelestialBody } from '../../models/celestial-body.model';

@Component({
  selector: 'app-orbit-viewer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="orbit-container">
      <div class="sun" (click)="selectBody(sun)" 
           [style.background]="sun.color">
      </div>
      @for (planet of planets; track planet.id) {
        <div class="orbit" 
             [style.width.px]="getOrbitSize(planet)"
             [style.height.px]="getOrbitSize(planet)">
          <div class="planet" 
               [style.background]="planet.color"
               [style.width.px]="getPlanetSize(planet)"
               [style.height.px]="getPlanetSize(planet)"
               [style.animation-duration.s]="planet.orbitalPeriod / 10"
               (click)="selectBody(planet)">
            <span class="planet-name">{{planet.name}}</span>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .orbit-container {
      position: relative;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      overflow: hidden;
    }

    .sun {
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0 0 50px rgba(253, 184, 19, 0.7);
      cursor: pointer;
      z-index: 10;
    }

    .orbit {
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
    }

    .planet {
      position: absolute;
      border-radius: 50%;
      transform-origin: 50% 50%;
      cursor: pointer;
      animation: orbit linear infinite;
    }

    .planet-name {
      position: absolute;
      color: white;
      font-size: 12px;
      white-space: nowrap;
      top: -20px;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .planet:hover .planet-name {
      opacity: 1;
    }

    @keyframes orbit {
      from { transform: rotate(0deg) translateX(50%); }
      to { transform: rotate(360deg) translateX(50%); }
    }
  `]
})
export class OrbitViewerComponent implements OnInit {
  sun!: CelestialBody;
  planets: CelestialBody[] = [];
  
  constructor(private solarService: SolarSystemService) {}

  ngOnInit() {
    this.sun = this.solarService.getBody(0)!;
    this.planets = this.solarService.getPlanets();
  }

  getOrbitSize(planet: CelestialBody): number {
    return 100 + (planet.distanceFromSun * 0.8);
  }

  getPlanetSize(planet: CelestialBody): number {
    return 10 + (planet.diameter * 0.002);
  }

  selectBody(body: CelestialBody): void {
    this.solarService.setSelectedBody(body);
  }
}