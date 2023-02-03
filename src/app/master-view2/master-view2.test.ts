import { expect } from '@open-wc/testing';
import MasterView2 from './master-view2.js';

describe('MasterView2', () => {
  it('<app-master-view2> is an instance of MasterView2', async () => {
    const element = document.createElement('app-master-view2');
    expect(element).to.be.instanceOf(MasterView2);
  });
});
