import { expect } from '@open-wc/testing';
import FloatingActionButton from './floating-action-button.js';

describe('FloatingActionButton', () => {
  it('<app-floating-action-button> is an instance of FloatingActionButton', async () => {
    const element = document.createElement('app-floating-action-button');
    expect(element).to.be.instanceOf(FloatingActionButton);
  });
});
