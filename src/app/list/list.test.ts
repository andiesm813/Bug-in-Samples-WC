import { expect } from '@open-wc/testing';
import List from './list.js';

describe('List', () => {
  it('<app-list> is an instance of List', async () => {
    const element = document.createElement('app-list');
    expect(element).to.be.instanceOf(List);
  });
});
