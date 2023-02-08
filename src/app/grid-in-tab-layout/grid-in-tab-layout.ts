import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcIconComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import NorthwindService from '../service/northwind-service';

defineComponents(IgcTabsComponent, IgcIconComponent);

@customElement('app-grid-in-tab-layout')
export default class GridInTabLayout extends LitElement {
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
    .row-layout {
      display: flex;
    }
    .container {
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
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-basis: 0;
    }
    .grid {
      flex-grow: 1;
      flex-basis: 0;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
  `;

  constructor() {
    super();
    const northwindService: NorthwindService = new NorthwindService();
    this.northwindEmployees = northwindService.getData('Employees');
  }

  @property()
  private northwindEmployees?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="row-layout container">
        <div class="row-layout group">
          <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography grid">
            <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
            <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
            <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
            <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
            <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
            <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
            <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
            <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
            <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
            <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
            <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
          </igc-grid>
        </div>
        <div class="row-layout group">
          <igc-tabs class="tabs">
            <igc-tab ?selected="${true}">
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content">
              <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" class="ig-typography grid">
                <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
                <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
                <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
                <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
                <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
                <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
                <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
                <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
                <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
                <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
                <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
              </igc-grid>
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">info</span>
              Label
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          </igc-tabs>
        </div>
      </div>
    `;
  }
}
