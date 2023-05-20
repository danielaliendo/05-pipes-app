import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

// Locale settings
import localeEs419 from '@angular/common/locales/es-419';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs419);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'en'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
