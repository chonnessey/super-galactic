export class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = 0
    this.mercuryLifeForce = 0;
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
    this.jupiterAge = this.age * 11.86;
    return this.jupiterAge;
  }

  mercLifeExpectancy() {
    this.mercuryLifeForce = this.mercuryAge - this.lifeExpectancy;
    if (this.mercuryLifeForce <= 0) {
      this.mercuryLifeForce = this.mercuryLifeForce * -1;
    } else {
      this.mercuryLifeForce = this.mercuryLifeForce * -1;
    }
    console.log(this.mercuryLifeForce);
    return this.mercuryLifeForce;
  }
}

let newTest = new GalacticAge(25, 100);
newTest.mercAge();
newTest.mercLifeExpectancy();
console.log(newTest);