import {GalacticAge} from '../src/galactic.js'

describe('GalacticAge', () => {
  
  test('GalacticAge should have age property', () => {
    let newAge = new GalacticAge(50);
    expect(newAge.age).toBeDefined();
  });

  test('GalacticAge should have lifeExpectancy property', () => {
    let newAge = new GalacticAge(50, 125);
    expect(newAge.lifeExpectancy).toBeDefined();
  });

  test('mercAge method should return users age in mercury', () => {
    let mercAge = new GalacticAge(29);
    mercAge.mercAge();
    expect(mercAge.mercuryAge).toEqual(6.96);
  });

  test('venAge method should return users age in venus', () => {
    let venAge = new GalacticAge(29);
    venAge.venAge();
    expect(venAge.venusAge).toEqual(17.98);
  });

  test('marsAge method should return users age in mars', () => {
    let mAge = new GalacticAge(29);
    mAge.marsAge();
    expect(mAge.marsAge).toBeCloseTo(54.52);
  });

  test('jupAge method should return users age in jupiter', () => {
    let jAge = new GalacticAge(29);
    jAge.jupAge();
    expect(jAge.jupiterAge).toEqual(343.94);
  });

  test('mercLifeExpectancy method should return users life expectancy as a positive number if they still have time to live', () => {
    let planet = new GalacticAge(25, 100);
    planet.mercAge();
    planet.mercLifeExpectancy();
    expect(planet.mercuryLifeForce).toEqual(94)
  });

  test('mercLifeExpectancy method should return users life expectancy as a negative number if they have lived past their life expectancy', () => {
    let planet = new GalacticAge(500, 100);
    planet.mercAge();
    planet.mercLifeExpectancy();
    expect(planet.mercuryLifeForce).toEqual(-20)
  });

  test('venusLifeExpectancy method should return users life expectancy as a positive number if they still have time to live', () => {
    let planet = new GalacticAge(25, 100);
    planet.venAge();
    planet.venusLifeExpectancy();
    expect(planet.venusLifeForce).toEqual(84.5)
  });
});
