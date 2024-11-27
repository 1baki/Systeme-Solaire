import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CelestialBody } from '../models/celestial-body.model';

@Injectable({
  providedIn: 'root'
})
export class SolarSystemService {
  private selectedBodySubject = new BehaviorSubject<CelestialBody | null>(null);
  private bodies: CelestialBody[] = [
    {
      id: 0,
      name: 'Soleil',
      type: 'star',
      diameter: 1392684,
      distanceFromSun: 0,
      orbitalPeriod: 0,
      rotationPeriod: 609.6,
      temperature: 5505,
      color: '#FDB813',
      description: 'Étoile centrale du système solaire',
      composition: ['Hydrogène', 'Hélium'],
      imageUrl: '/assets/images/sun.jpg',
      orbitDuration: undefined
    },
    {
      id: 1,
      name: 'Mercure',
      type: 'planet',
      diameter: 4879,
      distanceFromSun: 57.9,
      orbitalPeriod: 88,
      rotationPeriod: 1407.6,
      temperature: 167,
      color: '#A0522D',
      description: 'Planète tellurique la plus proche du Soleil',
      composition: ['Fer', 'Silicates'],
      imageUrl: '/assets/images/mercury.jpg',
      orbitDuration: undefined
    },
    {
      id: 2,
      name: 'Vénus',
      type: 'planet',
      diameter: 12104,
      distanceFromSun: 108.2,
      orbitalPeriod: 224.7,
      rotationPeriod: -5832.5,
      temperature: 464,
      color: '#DEB887',
      description: 'Planète la plus chaude du système solaire',
      composition: ['Dioxyde de carbone', 'Azote'],
      imageUrl: '/assets/images/venus.jpg',
      orbitDuration: undefined
    },
    {
      id: 3,
      name: 'Terre',
      type: 'planet',
      diameter: 12742,
      distanceFromSun: 149.6,
      orbitalPeriod: 365.2,
      rotationPeriod: 24,
      temperature: 15,
      color: '#4169E1',
      description: 'Notre planète, la seule connue abritant la vie',
      composition: ['Azote', 'Oxygène'],
      imageUrl: '/assets/images/earth.jpg',
      orbitDuration: undefined
    },
    {
      id: 4,
      name: 'Mars',
      type: 'planet',
      diameter: 6779,
      distanceFromSun: 227.9,
      orbitalPeriod: 687,
      rotationPeriod: 24.6,
      temperature: -63,
      color: '#CD5C5C',
      description: 'La planète rouge, cible de futures missions spatiales',
      composition: ['Dioxyde de carbone', 'Azote'],
      imageUrl: '/assets/images/mars.jpg',
      orbitDuration: undefined
    },
    {
      id: 5,
      name: 'Jupiter',
      type: 'planet',
      diameter: 139820,
      distanceFromSun: 778.5,
      orbitalPeriod: 4333,
      rotationPeriod: 9.9,
      temperature: -110,
      color: '#DEB887',
      description: 'La plus grande planète du système solaire',
      composition: ['Hydrogène', 'Hélium'],
      imageUrl: '/assets/images/jupiter.jpg',
      orbitDuration: undefined
    },
    {
      id: 6,
      name: 'Saturne',
      type: 'planet',
      diameter: 116460,
      distanceFromSun: 1434,
      orbitalPeriod: 10759,
      rotationPeriod: 10.7,
      temperature: -140,
      color: '#F4A460',
      description: 'Célèbre pour ses anneaux spectaculaires',
      composition: ['Hydrogène', 'Hélium'],
      imageUrl: '/assets/images/saturn.jpg',
      orbitDuration: undefined
    },
    {
      id: 7,
      name: 'Uranus',
      type: 'planet',
      diameter: 50724,
      distanceFromSun: 2871,
      orbitalPeriod: 30687,
      rotationPeriod: -17.2,
      temperature: -195,
      color: '#87CEEB',
      description: 'Planète géante de glace avec rotation axiale unique',
      composition: ['Hydrogène', 'Hélium', 'Méthane'],
      imageUrl: '/assets/images/uranus.jpg',
      orbitDuration: undefined
    },
    {
      id: 8,
      name: 'Neptune',
      type: 'planet',
      diameter: 49244,
      distanceFromSun: 4495,
      orbitalPeriod: 60190,
      rotationPeriod: 16.1,
      temperature: -200,
      color: '#4169E1',
      description: 'La dernière planète du système solaire',
      composition: ['Hydrogène', 'Hélium', 'Méthane'],
      imageUrl: '/assets/images/neptune.jpg',
      orbitDuration: undefined
    }
    
        
  ];

  getBody(id: number): CelestialBody | undefined {
    return this.bodies.find(body => body.id === id);
  }

  getAllBodies(): CelestialBody[] {
    return this.bodies;
  }

  getPlanets(): CelestialBody[] {
    return this.bodies.filter(body => body.type === 'planet');
  }

  setSelectedBody(body: CelestialBody | null): void {
    this.selectedBodySubject.next(body);
  }

  getSelectedBody(): Observable<CelestialBody | null> {
    return this.selectedBodySubject.asObservable();
  }
}