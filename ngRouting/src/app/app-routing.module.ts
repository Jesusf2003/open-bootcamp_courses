import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'hijo',
        component: HomePageComponent
      }
    ],
    canActivate: [ AuthGuard ]
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'contacts/:id',
    component: ContactDetailsPageComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
