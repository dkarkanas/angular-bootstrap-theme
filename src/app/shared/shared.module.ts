import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    SideMenuComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideMenuComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
