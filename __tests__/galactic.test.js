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
});
