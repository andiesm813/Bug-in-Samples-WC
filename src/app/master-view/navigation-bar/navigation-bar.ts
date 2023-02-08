import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcAvatarComponent, IgcButtonComponent);

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
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      width: max-content;
      height: max-content;
    }
    .navbar {
      background-color: hsla(var(--ig-secondary-700));
      color: hsla(var(--ig-surface-500));
      height: max-content;
      min-width: min-content;
    }
    .navbar_1 {
      background-color: hsla(var(--ig-surface-500));
      height: max-content;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-surface-500));
    }
    .avatar {
      --background: none;
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .button::part(base) {
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
          <h6>I only added the avatar to this one</h6>
          <div slot="start">
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                menu
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
          <div slot="end">
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                search
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                favorite
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                more_vert
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
          </div>
        </igc-navbar>
        <igc-navbar class="navbar_1">
          <h6>Rapid Fission Inc.</h6>
          <igc-button class="button">
            HOME
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            MY INFO
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            PEople
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            MY FILES
            <igc-ripple></igc-ripple>
          </igc-button>
          <div slot="end">
            <div class="row-layout group_1"></div>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                notifications
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
          </div>
        </igc-navbar>
        <igc-navbar class="navbar_1">
          <h6>Rapid Fission Inc.</h6>
          <igc-button class="button">
            HOME
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" class="button">
            MY INFO
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            PEople
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-button variant="flat" ?disabled="${true}" class="button">
            MY FILES
            <igc-ripple></igc-ripple>
          </igc-button>
          <div slot="end">
            <div class="row-layout group_1"></div>
            <igc-icon-button variant="flat">
              <span class="material-icons">
                notifications
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </igc-navbar>
      </div>
    `;
  }
}
