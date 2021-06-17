import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './m-core/core.module';
import { SharedModule } from './m-shared/shared.module';
import { BlockModule } from './m-block/block.module';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './m-block/root/app.component';

@NgModule({
  declarations: [

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    SharedModule,
    BlockModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
