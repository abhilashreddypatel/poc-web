import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { MainComponent } from './Inventory/components/main/main.component';
import { HeaderComponent } from './Inventory/components/header/header.component';

const routes: Routes = [
  { path: '**', component: MainComponent },
  // { path: 'home', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
