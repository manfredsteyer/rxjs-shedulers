import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    console.log('in AppModule ctor');
  }

  ngDoBootstrap() {
    const signaturePadElement = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('signature-pad', signaturePadElement);

  }
}

