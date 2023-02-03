import { Route } from '@vaadin/router';
import './buttons/buttons';
import './button-styles/button-styles';
import './button-group/button-group';
import './space-between/space-between';
import './cards-opacity/cards-opacity';
import './card-actions/card-actions';
import './chips/chips';
import './dialog/dialog';
import './grid-in-tab-layout/grid-in-tab-layout';
import './input-group/input-group';

export const routes: Route[] = [
  { path: '', component: 'app-buttons', name: 'Buttons' },
  { path: 'buttons', component: 'app-buttons', name: 'Buttons' },
  { path: 'button-styles', component: 'app-button-styles', name: 'Button Styles' },
  { path: 'button-group', component: 'app-button-group', name: 'Button Group' },
  { path: 'space-between', component: 'app-space-between', name: 'Space Between' },
  { path: 'cards-opacity', component: 'app-cards-opacity', name: 'Cards Opacity' },
  { path: 'card-actions', component: 'app-card-actions', name: 'Card Actions' },
  { path: 'chips', component: 'app-chips', name: 'Chips' },
  { path: 'dialog', component: 'app-dialog', name: 'Dialog' },
  { path: 'grid-in-tab-layout', component: 'app-grid-in-tab-layout', name: 'Grid in Tab Layout' },
  { path: 'input-group', component: 'app-input-group', name: 'Input Group' }
];
