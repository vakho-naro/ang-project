import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', loadChildren:  () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },

  { path: 'servers', loadChildren:  () => import('./servers/servers.module').then(m => m.ServersModule),  },

  { path: 'users', component: UsersComponent, canActivate: [AuthGuardService], children: [
      { path: ':id/:name', component: UserComponent },
   ] },

  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },

]

@NgModule({
    imports: [
      RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  
  }
  