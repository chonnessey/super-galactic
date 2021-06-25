export class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = 0
    this.mercuryLifeForce = 0;
    this.venusAge = 0;
    this.venusLifeForce = 0;
    this.marAge = 0;
    this.marsLifeForce = 0;
    this.jupiterAge = 0;
    this.jupiterLifeForce = 0;
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
    this.marAge = this.age * 1.88;
    return this.marAge;
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
    return this.mercuryLifeForce;
  }

  venusLifeExpectancy() {
    this.venusLifeForce = this.venusAge - this.lifeExpectancy;
    if (this.venusLifeForce <= 0) {
      this.venusLifeForce = this.venusLifeForce * -1;
    } else {
      this.venusLifeForce = this.venusLifeForce * -1;
    }
    return this.venusLifeForce;
  }

  marsLifeExpectancy() {
    this.marsLifeForce = this.marAge - this.lifeExpectancy;
    if (this.marsLifeForce <= 0) {
      this.marsLifeForce = this.marsLifeForce * -1;
    } else {
      this.marsLifeForce = this.marsLifeForce * -1;
    }
    console.log(this.marsLifeForce);
    return this.marsLifeForce;
  }

  jupiterLifeExpectancy() {
    this.jupiterLifeForce = this.jupiterAge - this.lifeExpectancy;
    if (this.jupiterLifeForce <= 0) {
      this.jupiterLifeForce = this.jupiterLifeForce * -1;
    // } else {
    //   this.jupiterLifeForce = this.jupiterLifeForce * -1;
    }
    console.log(this.jupiterLifeForce);
    return this.jupiterLifeForce;
  }
}

let newTest = new GalacticAge(5, 100);
newTest.jupAge();
newTest.jupiterLifeExpectancy();
console.log(newTest);