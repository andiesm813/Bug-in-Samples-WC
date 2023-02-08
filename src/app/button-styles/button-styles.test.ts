import { expect } from '@open-wc/testing';
import ButtonStyles from './button-styles.js';

describe('ButtonStyles', () => {
  it('<app-button-styles> is an instance of ButtonStyles', async () => {
    const element = document.createElement('app-button-styles');
    expect(element).to.be.instanceOf(ButtonStyles);
  });
});
