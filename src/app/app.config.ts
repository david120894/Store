import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {MotorcycleRepository} from "./domain/motorcycle.repository";
import {MotorcycleRestRepository} from "./infrastructure/rest/motorcycle.repository";
import {MotorcycleUseCase} from "./domain/motorcycle.usecase";
import {MotorcycleUcase} from "./usecase/motorcycle.usecase";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {provide:MotorcycleRepository,useClass:MotorcycleRestRepository},
    {provide:MotorcycleUseCase, useClass:MotorcycleUcase}]
};
