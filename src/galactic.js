export class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercAge() {
    this.mercuryAge = this.age * .24;
    return this.mercuryAge;
  }

  venusAge() {
    
  }
}