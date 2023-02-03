import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { defineComponents, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcCalendarComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';

defineComponents(IgcButtonComponent, IgcIconComponent, IgcRippleComponent, IgcBadgeComponent, IgcListComponent, IgcListItemComponent, IgcIconButtonComponent, IgcAvatarComponent, IgcCalendarComponent);

@customElement('app-resizing-issue')
export default class ResizingIssue extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .button {
      left: 50%;
      transform: translateX(-50%);
      top: 40px;
      position: absolute;
      width: max-content;
      height: max-content;
    }
    .button_1 {
      width: max-content;
      height: max-content;
      min-width: min-content;
    }
    .button_2 {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .content_1 {
      height: max-content;
      min-width: min-content;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: hsla(var(--ig-gray-600));
    }
    .avatar {
      --background: none;
    }
    .calendar {
      width: max-content;
      height: max-content;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #E83180;
    }
    .icon_2 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #72DA67;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-gray-600));
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .left_nav {
      background-color: hsla(var(--ig-surface-500));
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      padding: 24px;
      width: 260px;
      flex-shrink: 0;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      padding: 0 16px 0 0;
      min-width: 50px;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      height: max-content;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .right-content-1 {
      background-color: rgba(96, 96, 96, 0.1);
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .content_toolbar-1 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: max-content;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      overflow: hidden;
      position: relative;
      min-width: 375px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
    }
    .group_7 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 32px;
      overflow: hidden;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
    .list {
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-button variant="fab" @click="${() => Router.go('/master-view/buttons')}" class="button">
        <span class="material-icons">
          keyboard_backspace
        </span>
        <span>Back to other Master</span>
        <igc-ripple></igc-ripple>
      </igc-button>
      <div class="column-layout left_nav">
        <h6 class="content">
          Tasks
        </h6>
        <div class="row-layout group">
          <p class="typography__body-1 content_1">
            VD Team
          </p>
          <igc-badge class="badge">
            11
          </igc-badge>
        </div>
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 content">
            LISTS
          </p>
          <igc-list class="list">
            <igc-list-item>
              <div slot="title">General</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">App Builder</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Indigo.Design</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Marketing</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Customer Portal</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-button variant="flat" class="button_1">
            <span class="material-icons">
              add
            </span>
            <span>FILTER</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout group_1">
          <p class="typography__subtitle-2 content">
            FILTERS
          </p>
          <igc-list class="list">
            <igc-list-item>
              <div slot="title">Due this Week</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Overdue</div>
              <div slot="end">
                <span class="material-icons icon">
                  more_vert
                </span>
              </div>
            </igc-list-item>
          </igc-list>
          <igc-button variant="flat" class="button_1">
            <span class="material-icons">
              add
            </span>
            <span>FILTER</span>
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
      <div class="column-layout right-content-1">
        <div class="row-layout content_toolbar-1">
          <h5 class="content_1">
            VD Team
          </h5>
          <div class="row-layout group_2">
            <igc-button variant="flat" class="button_2">
              <span class="material-icons">
                list
              </span>
              <span>LIST</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" class="button_2">
              <span class="material-icons">
                calendar_view_day
              </span>
              <span>SECTION</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" class="button_2">
              <span class="material-icons">
                dns
              </span>
              <span>FIELDS</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                filter_list
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-icon-button variant="flat" class="icon-button">
              <span class="material-icons">
                more_vert
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
          </div>
        </div>
        <div class="row-layout group_3">
          <div class="column-layout group_4">
            <div class="column-layout group_5">
              <div class="column-layout group_6">
                <h6 class="content">
                  Developer Tools
                </h6>
                <p class="typography__subtitle-2 content">
                  Release 2020.2
                </p>
              </div>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Download any Ultimate product and take notes on the download process</div>
                  <div slot="subtitle">Product download process experience</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Report about the downloaded ultimate products to the Marketing Team</div>
                  <div slot="subtitle">Product download process experience</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
              </igc-list>
              <igc-button variant="flat" class="button_1">
                <span class="material-icons">
                  add
                </span>
                <span>task</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
            <div class="column-layout group_5">
              <div class="column-layout group_7">
                <h6 class="content">
                  App Builder
                </h6>
                <p class="typography__subtitle-2 content">
                  September release - Sprint 1
                </p>
              </div>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Research new sample app</div>
                  <div slot="subtitle">New sample application</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar2.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Create visual design for new sample app</div>
                  <div slot="subtitle">New sample application</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Implementation for new sample app</div>
                  <div slot="subtitle">New sample application</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Tweaks in List component</div>
                  <div slot="subtitle">App Builder UI Components</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">QE of new App Builder components</div>
                  <div slot="subtitle">App Builder UI Components</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="start">
                    <igc-avatar src="/src/assets/Avatar4.png" size="small" shape="circle" class="avatar"></igc-avatar>
                  </div>
                  <div slot="title">Implementation of Chips component</div>
                  <div slot="subtitle">App Builder UI Components</div>
                  <div slot="end">
                    <span class="material-icons icon">
                      edit
                    </span>
                  </div>
                </igc-list-item>
              </igc-list>
              <igc-button variant="flat" class="button_1">
                <span class="material-icons">
                  add
                </span>
                <span>task</span>
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
          <div class="column-layout group_8">
            <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
            <div class="column-layout group_5">
              <h6 class="content">
                Release Calendar
              </h6>
              <igc-list class="list">
                <igc-list-item>
                  <div slot="title">App Builder</div>
                  <div slot="subtitle">Product download process experience</div>
                  <div slot="end">
                    <span class="material-icons icon_1">
                      check_circle
                    </span>
                  </div>
                </igc-list-item>
                <igc-list-item>
                  <div slot="title">Ultimate Products Review</div>
                  <div slot="subtitle">08.13.2020</div>
                  <div slot="end">
                    <span class="material-icons icon_2">
                      error
                    </span>
                  </div>
                </igc-list-item>
              </igc-list>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
