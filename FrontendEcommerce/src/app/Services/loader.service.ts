import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public isLoading$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  showLoader() {
    this.isLoading$.next(true);
  }

  hideLoader() {
    this.isLoading$.next(false);
  }
}
