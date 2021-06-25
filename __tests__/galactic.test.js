import {GalacticAge} from '../src/galactic.js'

describe('GalacticAge', () => {
  test('GalacticAge should have age property', () => {
    let newAge = new GalacticAge(50)
    expect(newAge.age).toBeDefined();
  });
});
