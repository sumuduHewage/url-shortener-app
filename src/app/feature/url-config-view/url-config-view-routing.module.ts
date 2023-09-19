import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormatUrlComponent} from "./format-url/format-url.component";

const routes: Routes = [
  {
    path: '',
    component: FormatUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrlConfigViewRoutingModule { }
