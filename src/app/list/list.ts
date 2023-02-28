import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcIconComponent, IgcListComponent, IgcListHeaderComponent, IgcListItemComponent } from 'igniteui-webcomponents';

defineComponents(IgcListComponent, IgcListHeaderComponent, IgcListItemComponent, IgcAvatarComponent, IgcIconComponent);

@customElement('app-list')
export default class List extends LitElement {
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
      gap: 32px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .list {
      height: max-content;
    }
    .avatar {
      --background: none;
      --ig-gray-400: transparent;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #D3D3D3;
    }
    .icon_1 {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #FBA748;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout container">
        <igc-list class="list">
          <igc-list-header>Contacts</igc-list-header>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar3.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Terrance Orta</div>
            <div slot="subtitle">123-456-7890</div>
            <div slot="end">
              <span class="material-icons icon">
                star
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar13.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Richard Mahoney</div>
            <div slot="subtitle">123-456-7890</div>
            <div slot="end">
              <span class="material-icons icon_1">
                star
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar1.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Donna Price</div>
            <div slot="subtitle">123-456-7890</div>
            <div slot="end">
              <span class="material-icons icon">
                star
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar5.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Lisa Landers</div>
            <div slot="subtitle">123-456-7890</div>
            <div slot="end">
              <span class="material-icons icon">
                star
              </span>
            </div>
          </igc-list-item>
          <igc-list-item>
            <div slot="start">
              <igc-avatar src="/src/assets/Avatar6.png" size="small" shape="circle" class="avatar"></igc-avatar>
            </div>
            <div slot="title">Dorothy H. Spencer</div>
            <div slot="subtitle">123-456-7890</div>
            <div slot="end">
              <span class="material-icons icon_1">
                star
              </span>
            </div>
          </igc-list-item>
        </igc-list>
      </div>
    `;
  }
}
