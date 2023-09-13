import { Directive, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../services/app-config.service';
import { IAppConfig } from '../models/app-config.model';

@Directive()
export abstract class BaseClass implements OnDestroy {
  private destroyer$ = new Subject<any>();
  public limit = 10;
  public offset = 0;
  public totalRecords = 0;
  public appConfig = this.config?.appConfig;
  public fetchingData = false;

  constructor(public config?: ConfigService) {}

  ngOnDestroy(): void {
    this.destroyer$.next(null);
    this.destroyer$.complete();
  }

  unsubsribeOnDestroy = (source: Observable<any>): Observable<any> => {
    return source.pipe(takeUntil(this.destroyer$));
  };
}
