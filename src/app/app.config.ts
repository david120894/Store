import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {MotorcycleRepository} from "./project/domain/motorcycle.repository";
import {MotorcycleRestRepository} from "./project/infrastructure/rest/motorcycle.repository";
import {MotorcycleUseCase} from "./project/domain/motorcycle.usecase";
import {MotorcycleUcase} from "./project/usecase/motorcycle.usecase";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {provide:MotorcycleRepository,useClass:MotorcycleRestRepository},
    {provide:MotorcycleUseCase, useClass:MotorcycleUcase}]
};
