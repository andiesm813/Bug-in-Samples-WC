import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcIconComponent, IgcInputComponent } from 'igniteui-webcomponents';

defineComponents(IgcInputComponent, IgcIconComponent);

@customElement('app-input-group')
export default class InputGroup extends LitElement {
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
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .input {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  @property()
  private value?: any = 'With content';

  @property()
  private value1?: any = 'Disabled';

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout container">
        <div class="row-layout group">
          <div class="row-layout group_1">
            <p class="typography__subtitle-2 text">
              Box
            </p>
          </div>
          <igc-input label="Label" placeholder="and Placeholder" ?outlined="${false}" class="input">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
          </igc-input>
          <igc-input .value="${this.value}" label="Task Name" ?outlined="${false}" class="input">
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input .value="${this.value1}" label="Task Name" ?disabled="${true}" ?outlined="${false}" class="input">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
        <div class="row-layout group">
          <div class="row-layout group_1">
            <p class="typography__subtitle-2 text">
              Outline
            </p>
          </div>
          <igc-input label="Label" placeholder="and Placeholder" ?outlined="${true}" class="input">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
          </igc-input>
          <igc-input .value="${this.value}" label="Task Name" ?outlined="${true}" class="input">
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
          <igc-input .value="${this.value1}" label="Task Name" ?disabled="${true}" ?outlined="${true}" class="input">
            <span slot="prefix">
              <span class="material-icons icon">
                person
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                clear
              </span>
            </span>
          </igc-input>
        </div>
      </div>
    `;
  }
}
