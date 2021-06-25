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
    expect(mercAge.mercuryAge).toEqual(6.96);
  });
  
});
