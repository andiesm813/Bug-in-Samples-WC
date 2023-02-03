import { expect } from '@open-wc/testing';
import GridInTabLayout from './grid-in-tab-layout.js';

describe('GridInTabLayout', () => {
  it('<app-grid-in-tab-layout> is an instance of GridInTabLayout', async () => {
    const element = document.createElement('app-grid-in-tab-layout');
    expect(element).to.be.instanceOf(GridInTabLayout);
  });
});
