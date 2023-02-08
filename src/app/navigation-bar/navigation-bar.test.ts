import { expect } from '@open-wc/testing';
import NavigationBar from './navigation-bar.js';

describe('NavigationBar', () => {
  it('<app-navigation-bar> is an instance of NavigationBar', async () => {
    const element = document.createElement('app-navigation-bar');
    expect(element).to.be.instanceOf(NavigationBar);
  });
});
