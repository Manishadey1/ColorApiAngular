import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorsComponent } from './colors/colors.component';
import { AnothercolorsComponent } from './anothercolors/anothercolors.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: '/colors'},
  // {path: 'colors', component: ColorsComponent},
  // // {path: 'another', component: AnotherColorComponent},
  // { path: '**', component: PageNotFoundComponent }

  // { path: '', pathMatch: 'full', redirectTo: '/colors' },
  // {
  //   path: 'colors', component: ColorsComponent, children: [
  //     { path: 'another', component: AnotherColorComponent,  pathMatch:'full' },
  //     { path: '**', component: PageNotFoundComponent }
  //   ]
  // },


  { path: 'colors', component: ColorsComponent },
  { path: 'another', component: AnothercolorsComponent },
  { path: '',   redirectTo: '/colors', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
