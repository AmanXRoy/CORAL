import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogeService {

  constructor(private dialoge: MatDialog) { }



  openDialogeBasedOnComponent(component: ComponentType<unknown>) {
    return this.dialoge.open(component, {
     
    })
  }
}
