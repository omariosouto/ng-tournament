import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Pages
import { CompetidorCadastroComponent, CompetidorListagemComponent } from './pages'

// Routes
import { routing } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    CompetidorListagemComponent,
    CompetidorCadastroComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
