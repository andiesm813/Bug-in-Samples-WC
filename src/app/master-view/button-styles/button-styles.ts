import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcDropdownComponent, IgcIconComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent);

@customElement('app-button-styles')
export default class ButtonStyles extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
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
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      left: 0;
      top: 0;
      position: absolute;
      min-width: min-content;
    }
    .dropdown::part(base) {
      height: max-content;
    }
  `;

  @query('#button-1')
  public button1?: IgcButtonComponent;

  @query('#dropdown-1')
  public dropdown1?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          Raised
        </p>
        <div class="row-layout group_1">
          <igc-button class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button class="button">
            <span class="material-icons">
              dashboard
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          Outline
        </p>
        <div class="row-layout group_1">
          <igc-button variant="outlined" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            <span class="material-icons">
              dashboard
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          Flat
        </p>
        <div class="row-layout group_1">
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              dashboard
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout group">
        <p class="typography__subtitle-2 text">
          With Dropdown
        </p>
        <div class="row-layout group_1">
          <igc-button variant="flat" @click=${() => this.dropdown1?.toggle(this.button1)} id="button-1" class="button">
            <span>Button</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown-1" class="dropdown">
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
      </div>
    `;
  }
}
