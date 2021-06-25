export class GalacticAge {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.mercuryAge = 0
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
    let mercLifeForce = this.mercuryAge - this.lifeExpectancy;
    console.log(mercLifeForce)
    let mercYearsLeft = 0
    if (mercLifeForce <= 0) {
      mercYearsLeft++
    }
    return mercYearsLeft;
  }
}
let newTest = new GalacticAge(29, 100);
console.log(newTest.mercLifeExpectancy());