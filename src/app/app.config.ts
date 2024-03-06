import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { MessageService } from './message.service';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      HttpClientXsrfModule.withOptions({
        cookieName: 'My-Xsrf-Cookie',
        headerName: 'My-Xsrf-Header',
      })
    ),
    MessageService,
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
  ],
};
