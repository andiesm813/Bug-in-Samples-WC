import { expect } from '@open-wc/testing';
import ButtonGroup from './button-group.js';

describe('ButtonGroup', () => {
  it('<app-button-group> is an instance of ButtonGroup', async () => {
    const element = document.createElement('app-button-group');
    expect(element).to.be.instanceOf(ButtonGroup);
  });
});
