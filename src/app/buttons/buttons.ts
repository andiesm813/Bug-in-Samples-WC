import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcDialogComponent, IgcDropdownComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcIconComponent, IgcDropdownComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcCardComponent, IgcDialogComponent);

@customElement('app-buttons')
export default class Buttons extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      gap: 24px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .buttons {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .dropdown {
      min-width: min-content;
    }
    .button_1 {
      height: max-content;
      min-width: min-content;
    }
    .button_2 {
      width: max-content;
      height: max-content;
    }
    .button_3::part(base) {
      background-color: hsla(var(--ig-primary-500));
    }
    .button_4::part(base) {
      color: hsla(var(--ig-success-500));
    }
    .button_5::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: #6C429D;
    }
    .button_6::part(base) {
      color: hsla(var(--ig-surface-500));
      background-color: #6C429D;
    }
    .button_7::part(base) {
      color: #6C429D;
    }
    .button_8::part(base) {
      color: #6C429D;
    }
    .button_9::part(base) {
      color: #6C429D;
    }
    .button_10::part(base) {
      color: #6C429D;
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .list {
      height: max-content;
      flex-shrink: 0;
    }
  `;

  @query('#button')
  public button?: IgcButtonComponent;

  @query('#dropdown')
  public dropdown?: IgcDropdownComponent;

  @query('#custom-dialog')
  public customDialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout buttons">
          <igc-button class="button button_3">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button class="button button_4">
            <span class="material-icons">
              add
            </span>
            <span>Green Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" @click=${() => this.dropdown?.toggle(this.button)} id="button" class="button">
            <span>With dropdown</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="dropdown" class="dropdown">
            <igc-dropdown-item>
              Option
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout group_1">
          <igc-list class="list">
            <igc-list-item>
              <div slot="start">
                <igc-avatar size="small" shape="circle" class="avatar">
                  <span class="material-icons">person</span>
                </igc-avatar>
              </div>
              <div slot="title">Title goes here</div>
              <div slot="subtitle">Subtitle...</div>
              <div>
                <igc-button class="button_1">
                  Button
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
              <div slot="end">
                <span class="material-icons icon">
                  star
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-card class="card">
            <igc-card-header>
              <h3 slot="title">
                Title goes here...
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <div class="column-layout group_2">
                <igc-button class="button_1">
                  Button in content
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-button variant="outlined" class="button_1">
                  Button in content
                  <igc-ripple></igc-ripple>
                </igc-button>
              </div>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-button class="button_1">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
            </igc-card-actions>
          </igc-card>
          <div class="column-layout group_2">
            <igc-button @click=${() => this.customDialog?.toggle()} class="button_1">
              Custom dialog
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
        </div>
        <div class="row-layout group_3">
          <igc-button variant="fab" class="button_2">
            <span class="material-icons">
              edit
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="fab" class="button_2">
            <span>Like</span>
            <span class="material-icons">
              favorite
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout buttons">
          <igc-button class="button">
            <span class="material-icons">
              add
            </span>
            <span>Green Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button ?disabled="${true}" class="button">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" ?disabled="${true}" class="button">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="row-layout buttons">
          <igc-button class="button button_5">
            <span class="material-icons">
              add
            </span>
            <span>Green Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button ?disabled="${true}" class="button button_6">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button button_7">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" ?disabled="${true}" class="button button_8">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button button_9">
            <span class="material-icons">
              add
            </span>
            <span>Button</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button button_10">
            <span class="material-icons">
              add
            </span>
            <span>DISABLED</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <igc-dialog ?closeOnOutsideSelect="${true}" ?closeOnEscape="${true}" id="custom-dialog">
        <h3 slot="title">
          <h5>
            Confirmation
          </h5>
        </h3>
        <div class="column-layout group_2">
          <igc-button class="button_1">
            Button in content
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="outlined" class="button_1">
            Button in content
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div slot="footer">
          <igc-button variant="flat" class="button_1">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button class="button_1">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </igc-dialog>
    `;
  }
}
