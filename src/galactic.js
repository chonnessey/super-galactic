export class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercAge() {
    this.mercuryAge = this.age * .24;
    return this.mercuryAge;
  }

  venAge() {
    this.venusAge = this.age * .62;
    return this.venusAge;
  }

  marsAge() {
    this.marsAge = this.age * 1.88;
    return this.marsAge;
  }

  jupAge() {
    
  }
}