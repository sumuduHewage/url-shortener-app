import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatUrlComponent} from './format-url/format-url.component';
import {UrlConfigViewRoutingModule} from "./url-config-view-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    FormatUrlComponent
  ],
  imports: [
    CommonModule,
    UrlConfigViewRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class UrlConfigViewModule {
}
