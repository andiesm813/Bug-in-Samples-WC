import { html, css, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavDrawerComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcDropdownComponent, IgcIconButtonComponent, IgcAvatarComponent, IgcNavDrawerComponent);

@customElement('app-master-view2')
export default class MasterView2 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .header {
      background-color: hsla(var(--ig-success-500));
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 12px 20px;
      height: 60px;
      flex-shrink: 0;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
    }
    .image {
      object-fit: cover;
      margin: 0 8px 0 0;
      width: 26px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .avatar {
      --background: none;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .project-dropdown {
      left: 35px;
      top: 0;
      position: absolute;
      min-width: min-content;
      flex-shrink: 0;
    }
    .button_1 {
      margin: 0 16px 0 0;
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
    .button::part(base) {
      color: #222222;
    }
    .project-dropdown::part(base) {
      width: 222px;
      height: max-content;
    }
    .button_1::part(base) {
      color: hsla(var(--ig-gray-900));
      background-color: hsla(var(--ig-surface-500));
    }
    .dropdown::part(base) {
      height: max-content;
    }
    .icon-button {
      margin: 0 8px 0 0;
    }
    .icon-button::part(base) {
      color: #222222;
    }
    .nav-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: min-content;
      flex-shrink: 0;
    }
    .view-container {
      overflow: auto;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .nav-drawer::part(main) {
      width: 320px;
    }
  `;

  @query('#button-3')
  public button3?: IgcButtonComponent;

  @query('#project-dropdown')
  public projectDropdown?: IgcDropdownComponent;

  @query('#avatar')
  public avatar?: IgcAvatarComponent;

  @query('#dropdown-3')
  public dropdown3?: IgcDropdownComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout header">
        <div class="row-layout group">
          <img src="/src/assets/slingshot-icon.svg" class="image" />
          <igc-button variant="flat" @click=${() => this.projectDropdown?.toggle(this.button3)} id="button-3" class="button">
            <span>Home</span>
            <span class="material-icons">
              keyboard_arrow_down
            </span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-dropdown id="project-dropdown" class="project-dropdown">
            <igc-dropdown-item>
              Home
            </igc-dropdown-item>
            <igc-dropdown-item>
              Company Inc.
            </igc-dropdown-item>
            <igc-dropdown-header>
              INDIGO.DESIGN
            </igc-dropdown-header>
            <igc-dropdown-item>
              Growth hacking
            </igc-dropdown-item>
            <igc-dropdown-item>
              Public preview
            </igc-dropdown-item>
            <igc-dropdown-item>
              UX Feedback
            </igc-dropdown-item>
            <igc-dropdown-header>
              Reveal
            </igc-dropdown-header>
            <igc-dropdown-item>
              Onboarding
            </igc-dropdown-item>
            <igc-dropdown-item>
              Analytics
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
        <div class="row-layout group_1">
          <igc-button class="button_1">
            <span class="material-icons">
              add
            </span>
            <span>Task</span>
            <igc-ripple></igc-ripple>
          </igc-button>
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              add_alert
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-icon-button variant="flat" class="icon-button">
            <span class="material-icons">
              message
            </span>
            <igc-ripple></igc-ripple>
          </igc-icon-button>
          <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" @click=${() => this.dropdown3?.toggle(this.avatar)} id="avatar" class="avatar"></igc-avatar>
          <igc-dropdown id="dropdown-3" class="dropdown">
            <igc-dropdown-item ?disabled="${true}">
              Edit Profile
            </igc-dropdown-item>
            <igc-dropdown-item ?disabled="${true}">
              About
            </igc-dropdown-item>
            <igc-dropdown-item>
              Logout
            </igc-dropdown-item>
          </igc-dropdown>
        </div>
      </div>
      <div class="row-layout group_2">
        <igc-nav-drawer position="relative" class="nav-drawer">
          <div slot="mini">
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  assignment_turned_in
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  dashboard
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  vertical_split
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  bar_chart
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
            <igc-nav-drawer-item>
              <span slot="icon">
                <span class="material-icons icon">
                  folder
                </span>
                <igc-ripple></igc-ripple>
              </span>
            </igc-nav-drawer-item>
          </div>
          <igc-nav-drawer-item>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
              <igc-ripple></igc-ripple>
            </span>
            <div slot="content">Title goes here</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <slot class="view-container"></slot>
      </div>
    `;
  }
}
