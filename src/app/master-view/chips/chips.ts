import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcChipComponent, IgcIconComponent } from 'igniteui-webcomponents';

defineComponents(IgcChipComponent, IgcIconComponent);

@customElement('app-chips')
export default class Chips extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .container {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 80px;
      min-height: 50px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .chip {
      width: max-content;
      height: max-content;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout container">
        <div class="row-layout group">
          <div class="row-layout group_1">
            <p class="typography__subtitle-2 text">
              Default
            </p>
          </div>
          <igc-chip size="large" class="chip">
            Country
          </igc-chip>
          <igc-chip size="large" class="chip">
            <span slot="prefix">
              <span class="material-icons icon">
                place
              </span>
            </span>
            Country
          </igc-chip>
          <igc-chip size="large" class="chip">
            <span slot="prefix">
              <span class="material-icons icon">
                place
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            Country
          </igc-chip>
          <igc-chip size="large" class="chip">
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            Country
          </igc-chip>
        </div>
        <div class="row-layout group">
          <div class="row-layout group_1">
            <p class="typography__subtitle-2 text">
              Disabled
            </p>
          </div>
          <igc-chip ?disabled="${true}" size="large" class="chip">
            Country
          </igc-chip>
          <igc-chip ?disabled="${true}" size="large" class="chip">
            <span slot="prefix">
              <span class="material-icons icon">
                place
              </span>
            </span>
            Country
          </igc-chip>
          <igc-chip ?disabled="${true}" size="large" class="chip">
            <span slot="prefix">
              <span class="material-icons icon">
                place
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            Country
          </igc-chip>
          <igc-chip ?disabled="${true}" size="large" class="chip">
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
            Country
          </igc-chip>
        </div>
      </div>
    `;
  }
}
