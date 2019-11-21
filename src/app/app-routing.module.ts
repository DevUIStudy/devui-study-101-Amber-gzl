import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminFileComponent } from './admin-file/admin-file.component';



const routes: Routes = [
  {
    path:'admin',component:AdminFileComponent,
    children: [
      { path: 'files', component: AdminFileComponent },
    ]
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
