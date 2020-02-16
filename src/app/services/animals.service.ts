import { Injectable } from "@angular/core";

@Injectable()
export class AnimalsService {
  private animals: Animals[] = [
    { title: "tiger", description: "Mom tiger and baby tiger" , img:"assets/img/adult-and-cub-tiger-on-snowfield-near-bare-trees-39629.jpg"  },
    { title: "alligator", description: "black alligator" ,img:'assets/img/black-alligator-on-water-1386560.jpg'},
    { title: "Hercules insect", description: "Scarabage" , img:'assets/img/brown-beetle-53988.jpg'}
  ];

  getAnimals() {
    return this.animals;
  }

  //for ActivatedRoute

  getAnimal( idx: string ){
    return this.animals[idx];
  }

  //for search animal
  searchAnimal( termino:string ){

    let animalArr: Animals[] = [];
    termino = termino.toLowerCase();

    for( let animal of this.animals){

      let title = animal.title.toLowerCase();
      if( title.indexOf( termino ) >= 0 ){
        animalArr.push( animal );
      }
    }
    return animalArr;
  }

  constructor() {}
}

export interface Animals {
  title: string;
  description: string;
  img: any;
}
