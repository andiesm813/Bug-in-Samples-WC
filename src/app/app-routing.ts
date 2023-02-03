import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './master-view/master-view';
import { routes as masterViewRoute } from './master-view/master-view-routing';
import './master-view2/master-view2';
import { routes as masterView2Route } from './master-view2/master-view2-routing';

export const routes: Route[] = [
  { path: '', component: 'app-master-view', name: 'Master View', children: masterViewRoute },
  { path: 'master-view', component: 'app-master-view', name: 'Master View', children: masterViewRoute },
  { path: 'master-view2', component: 'app-master-view2', name: 'Master View2', children: masterView2Route },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
