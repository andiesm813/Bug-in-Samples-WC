import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-button-group')
export default class ButtonGroup extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .button-group {
      height: max-content;
      min-width: min-content;
    }
    .button-group_1 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <span class="button-group">ButtonGroup not yet available in WebComponents</span>
        <span class="button-group">ButtonGroup not yet available in WebComponents</span>
        <span class="button-group">ButtonGroup not yet available in WebComponents</span>
      </div>
      <div class="row-layout group">
        <span class="button-group_1">ButtonGroup not yet available in WebComponents</span>
        <span class="button-group_1">ButtonGroup not yet available in WebComponents</span>
        <span class="button-group_1">ButtonGroup not yet available in WebComponents</span>
      </div>
    `;
  }
}
