import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { moduleManifest } from './modules/moduleManifest';




// const routes: Routes = [
//   {
//     path: 'test',
//     loadChildren: './modules/lazy1/lazy1.module#Lazy1Module'
//   }
// ];

const routes: Routes = [];


moduleManifest.forEach((module) => {
  routes.push({
    path: module.url,
    loadChildren: `${module.path}#${module.name}`
  })
});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
