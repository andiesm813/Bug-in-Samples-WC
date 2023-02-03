import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent);

@customElement('app-floating-action-button')
export default class FloatingActionButton extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      width: max-content;
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-button variant="fab" class="button">
          <span class="material-icons">
            edit
          </span>
          <igc-ripple></igc-ripple>
        </igc-button>
        <igc-button variant="fab" class="button">
          <span>Like</span>
          <span class="material-icons">
            favorite
          </span>
          <igc-ripple></igc-ripple>
        </igc-button>
      </div>
    `;
  }
}
