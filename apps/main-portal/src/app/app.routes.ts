import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation'

export const appRoutes: Route[] = [
  {path: 'login', loadChildren: () => loadRemoteModule('login', './Routes').then((m) => m.appRoutes),},
];


