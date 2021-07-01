import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestParentComponent } from './components/test-parent/test-parent.component';
import { TestChildComponent } from './components/test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
