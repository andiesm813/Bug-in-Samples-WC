import { expect } from '@open-wc/testing';
import Rating from './rating.js';

describe('Rating', () => {
  it('<app-rating> is an instance of Rating', async () => {
    const element = document.createElement('app-rating');
    expect(element).to.be.instanceOf(Rating);
  });
});
