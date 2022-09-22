import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponentComponent } from './error-component/error-component.component';

const routes: Routes = [
  {
    path: "HistoriaClinica",
    loadChildren: () => import("./view/view.module").then(r => r.ViewModule)
  },
  {path: "", redirectTo: "HistoriaClinica", pathMatch: "full"},
  {path: "error", component: ErrorComponentComponent},
  {path: "error/:type", component: ErrorComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
