import {GalacticAge} from '../src/galactic.js'

describe('GalacticAge', () => {
  
  test('GalacticAge should have age property', () => {
    let newAge = new GalacticAge(50)
    expect(newAge.age).toBeDefined();
  });

  test('GalacticAge should have lifeExpectancy property', () => {
    let newAge = new GalacticAge(50, 125)
    expect(newAge.lifeExpectancy).toBeDefined();
  });
});
