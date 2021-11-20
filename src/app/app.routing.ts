import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapContainerComponent } from './modules/map-container/components/map-container/map-container.component';
import { ErrorNotFoundComponent } from './shared/components/error-not-found/error-not-found.component';

export const routes: Routes = [
  {
    path: 'map',
    loadChildren: () => import('src/app/modules/map-container/map-container.module').then(m => m.MapContainerModule),
  },
  {
    path: '**',
    component: ErrorNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    ErrorNotFoundComponent
  ],
  providers: [],
})
export class AppRoutingModule { }

