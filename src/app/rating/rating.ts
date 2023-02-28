import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';

defineComponents(IgcRatingComponent);

@customElement('app-rating')
export default class Rating extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      justify-content: center;
      align-items: stretch;
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
    .group_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .rating {
      width: max-content;
      height: max-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <div class="row-layout group_1">
          <igc-rating size="small" class="rating"></igc-rating>
          <igc-rating size="medium" class="rating"></igc-rating>
          <igc-rating size="large" class="rating"></igc-rating>
        </div>
        <div class="row-layout group_1">
          <igc-rating value="3" size="small" class="rating"></igc-rating>
          <igc-rating value="3" size="medium" class="rating"></igc-rating>
          <igc-rating value="3" size="large" class="rating"></igc-rating>
        </div>
        <div class="row-layout group_1">
          <igc-rating label="Label" value="3" max="10" size="small" class="rating"></igc-rating>
          <igc-rating label="Label" value="3" max="10" size="medium" class="rating"></igc-rating>
          <igc-rating label="Label" value="3" max="10" size="large" class="rating"></igc-rating>
        </div>
        <div class="row-layout group_1">
          <igc-rating value="3" size="small" ?disabled="${true}" class="rating"></igc-rating>
          <igc-rating value="3" size="medium" ?disabled="${true}" class="rating"></igc-rating>
          <igc-rating value="3" size="large" ?disabled="${true}" class="rating"></igc-rating>
        </div>
      </div>
    `;
  }
}
