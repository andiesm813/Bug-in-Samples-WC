import { expect } from '@open-wc/testing';
import InputsCombos from './inputs-combos.js';

describe('InputsCombos', () => {
  it('<app-inputs-combos> is an instance of InputsCombos', async () => {
    const element = document.createElement('app-inputs-combos');
    expect(element).to.be.instanceOf(InputsCombos);
  });
});
