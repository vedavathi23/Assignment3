import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { IfNullOrEmpty } from './nullorempty.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    IfNullOrEmpty
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IfNullOrEmpty],
  bootstrap: [AppComponent]
})
export class AppModule { }
