import { SideBarComponent } from './lay-outs/side-bar/side-bar.component';
import { NavBarComponent } from './lay-outs/nav-bar/nav-bar.component';
import { FooterComponent } from './lay-outs/footer/footer.component';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockRoutingModule } from './block-routing.module';
import { SharedModule } from '../m-shared/shared.module';
import { HeaderComponent } from './lay-outs/header/header.component';
import { AppComponent } from './root/app.component';




@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NavBarComponent, SideBarComponent],
  imports: [
    CommonModule,
    BlockRoutingModule, SharedModule
  ],
  exports: [AppComponent, HeaderComponent, FooterComponent, NavBarComponent, SideBarComponent]
})
export class BlockModule { }
