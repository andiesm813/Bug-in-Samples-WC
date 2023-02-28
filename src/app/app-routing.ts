import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './buttons/buttons';
import './button-group/button-group';
import './button-styles/button-styles';
import './card-actions/card-actions';
import './cards-opacity/cards-opacity';
import './chips/chips';
import './dialog/dialog';
import './grid-in-tab-layout/grid-in-tab-layout';
import './inputs-combos/inputs-combos';
import './list/list';
import './navigation-bar/navigation-bar';
import './rating/rating';
import './space-between/space-between';
import './text-links/text-links';

export const routes: Route[] = [
  { path: '', component: 'app-buttons', name: 'Buttons' },
  { path: 'buttons', component: 'app-buttons', name: 'Buttons' },
  { path: 'button-group', component: 'app-button-group', name: 'Button Group' },
  { path: 'button-styles', component: 'app-button-styles', name: 'Button Styles' },
  { path: 'card-actions', component: 'app-card-actions', name: 'Card Actions' },
  { path: 'cards-opacity', component: 'app-cards-opacity', name: 'Cards Opacity' },
  { path: 'chips', component: 'app-chips', name: 'Chips' },
  { path: 'dialog', component: 'app-dialog', name: 'Dialog' },
  { path: 'grid-in-tab-layout', component: 'app-grid-in-tab-layout', name: 'Grid in Tab Layout' },
  { path: 'inputs-combos', component: 'app-inputs-combos', name: 'Inputs Combos' },
  { path: 'list', component: 'app-list', name: 'List' },
  { path: 'navigation-bar', component: 'app-navigation-bar', name: 'Navigation Bar' },
  { path: 'rating', component: 'app-rating', name: 'Rating' },
  { path: 'space-between', component: 'app-space-between', name: 'Space Between' },
  { path: 'text-links', component: 'app-text-links', name: 'Text Links' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
