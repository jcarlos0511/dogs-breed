import { Injectable } from "@angular/core";

@Injectable()
export class AnimalsService {
  private animals: Animals[] = [
    { title: "tiger", description: "Mom tiger and baby tiger" , img: "assets/img/adult-and-cub-tiger-on-snowfield-near-bare-trees-39629.jpg"},
    { title: "alligator", description: "black alligator" ,img:'assets/img/black-alligator-on-water-1386560.jpg'},
    { title: "Hercules insect", description: "Scarabage" , img:'assets/img/brown-beetle-53988.jpg'}
  ];

  getAnimals() {
    return this.animals;
  }

  constructor() {}
}

export interface Animals {
  title: string;
  description: string;
  img: any;
}
