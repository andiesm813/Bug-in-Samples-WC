import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcButtonComponent, IgcAvatarComponent);

@customElement('app-navigation-bar')
export default class NavigationBar extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px 0 0;
      min-width: 50px;
      min-height: 50px;
    }
    .navbar {
      height: max-content;
      min-width: min-content;
    }
    .navbar_1 {
      background-color: hsla(var(--ig-secondary-700));
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .navbar_2 {
      background-color: hsla(var(--ig-surface-500));
      color: hsla(var(--ig-gray-800));
      height: max-content;
      min-width: min-content;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .icon-button_1::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .icon-button_2::part(base) {
      color: hsla(var(--ig-gray-800));
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .button_1::part(base) {
      color: hsla(var(--ig-secondary-900));
      background-color: hsla(var(--ig-surface-500));
    }
    .button_2::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_3::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_4::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_5::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_6::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .button_7::part(base) {
      color: hsla(var(--ig-surface-500));
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <igc-navbar class="navbar">
          <h6>Screen Title</h6>
          <div slot="start">
            <igc-icon-button variant="flat">
              <span class="material-icons">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <div slot="end">
            <igc-icon-button variant="flat">
              <span class="material-icons">
                search
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                more_vert
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </igc-navbar>
        <igc-navbar class="navbar_1">
          <h6>Navigation Bar Issues</h6>
          <div slot="start">
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
          <igc-button class="button button_1">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button button_2">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button button_3">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button button_4">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <div slot="end">
            <igc-icon-button variant="flat" class="icon-button_1">
              <span class="material-icons">
                notifications
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
          </div>
        </igc-navbar>
        <igc-navbar class="navbar_2">
          <h6>Navigation Bar Issues</h6>
          <div slot="start">
            <igc-icon-button variant="flat" class="icon-button_2">
              <span class="material-icons">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
          <igc-button class="button button_5">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button button_6">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button button_7">
            Button
            <igc-ripple></igc-ripple>
          </igc-button>
          <div slot="end">
            <igc-icon-button variant="flat">
              <span class="material-icons">
                notifications
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
          </div>
        </igc-navbar>
      </div>
    `;
  }
}
