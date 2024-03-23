import { Route } from '@angular/router';

export const appRoutes: Route[] = [{
  path: '',
  redirectTo: 'game',
  pathMatch: 'full',
},
{
  path: 'game',
  loadComponent: async () => {
    const { GameComponent } = await import('./game/game.component');
    return GameComponent
  },
},];
