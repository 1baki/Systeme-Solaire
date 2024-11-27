export interface CelestialBody {
    orbitDuration: any;
      id: number;
      name: string;
      type: 'star' | 'planet' | 'dwarf-planet' | 'moon';
      diameter: number; // km
      distanceFromSun: number; // millions km
      orbitalPeriod: number; // jours terrestres
      rotationPeriod: number; // heures
      temperature: number; // Celsius moyen
      color: string;
      description: string;
      composition: string[];
      imageUrl: string;
    }