import { NgModule } from '@angular/core';
import { DataResolverService } from './services/data-resolver.service';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'job-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'job-list', loadChildren: './pages/job-list/job-list.module#JobListPageModule' },
  { path: 'offer/:id',
    resolve: {
      special: DataResolverService
    }, 
    loadChildren: './pages/offer/offer.module#OfferPageModule' 
  },
  { path: 'user-form', loadChildren: './pages/user-form/user-form.module#UserFormPageModule' },
  { path: 'bar-form', loadChildren: './pages/bar-form/bar-form.module#BarFormPageModule' },  { path: 'loggin-modal', loadChildren: './shared/loggin-modal/loggin-modal.module#LogginModalPageModule' },
  { path: 'user-profile', loadChildren: './pages/user-profile/user-profile.module#UserProfilePageModule' },
  { path: 'bar-profile', loadChildren: './pages/bar-profile/bar-profile.module#BarProfilePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
