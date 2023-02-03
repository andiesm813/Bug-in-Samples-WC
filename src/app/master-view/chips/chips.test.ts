import { expect } from '@open-wc/testing';
import Chips from './chips.js';

describe('Chips', () => {
  it('<app-chips> is an instance of Chips', async () => {
    const element = document.createElement('app-chips');
    expect(element).to.be.instanceOf(Chips);
  });
});
