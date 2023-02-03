import { expect } from '@open-wc/testing';
import ResizingIssue from './resizing-issue.js';

describe('ResizingIssue', () => {
  it('<app-resizing-issue> is an instance of ResizingIssue', async () => {
    const element = document.createElement('app-resizing-issue');
    expect(element).to.be.instanceOf(ResizingIssue);
  });
});
