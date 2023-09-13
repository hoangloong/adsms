import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAppConfig } from '../models/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public $appConfig = new BehaviorSubject<IAppConfig>({
    layout: 'HORIZONTAL',
    enableDock: true,
    collapsed: false,
  });

  get appConfig() {
    return this.$appConfig.value;
  }
}
