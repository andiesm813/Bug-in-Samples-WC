import { expect } from '@open-wc/testing';
import TextLinks from './text-links.js';

describe('TextLinks', () => {
  it('<app-text-links> is an instance of TextLinks', async () => {
    const element = document.createElement('app-text-links');
    expect(element).to.be.instanceOf(TextLinks);
  });
});
