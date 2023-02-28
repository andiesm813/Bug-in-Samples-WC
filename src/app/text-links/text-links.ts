import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-text-links')
export default class TextLinks extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
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
      gap: 8px;
      position: relative;
      padding: 16px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .hyperlink {
      cursor: pointer;
      height: max-content;
      min-width: min-content;
    }
  `;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h1 class="content">
          Heading 1
        </h1>
        <h2 class="content">
          Heading 2
        </h2>
        <h3 class="content">
          Heading 3
        </h3>
        <h4 class="content">
          Heading 4
        </h4>
        <h5 class="content">
          Heading 5
        </h5>
        <h6 class="content">
          Heading 6
        </h6>
        <p class="typography__subtitle-1 content">
          Subtitle 1
        </p>
        <p class="typography__subtitle-2 content">
          Subtitle 2
        </p>
        <p class="typography__body-1 content">
          Body 1
        </p>
        <p class="typography__body-2 content">
          Body 2
        </p>
        <p class="typography__caption content">
          Caption
        </p>
        <p class="typography__overline content">
          Overline
        </p>
      </div>
      <div class="column-layout group">
        <a href="http://thisisalink.com" class="hyperlink">
          <h1>Heading 1 link</h1>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <h2>Heading 2 link</h2>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <h3>Heading 3 link</h3>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <h4>Heading 4 link</h4>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <h5>Heading 5 link</h5>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <h6>Heading 6 link</h6>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <p class="typography__subtitle-1">Subtitle 1 link</p>
        </a>
        <a href="http://thisisalink.com" class="hyperlink">
          <p class="typography__subtitle-2">Subtitle 2 link</p>
        </a>
        <a href="http://thisisalink.com" class="typography__body-1 hyperlink">
          Body 1 link
        </a>
        <a href="http://thisisalink.com" class="typography__body-2 hyperlink">
          Body 2 link
        </a>
        <a href="http://thisisalink.com" class="caption hyperlink">
          Caption link
        </a>
        <a href="http://thisisalink.com" class="overline hyperlink">
          Overline link
        </a>
      </div>
    `;
  }
}
