import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './utilities/import-guard/import-guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    // interseptors
  ],
})
export class CoreModule {
  /*
  @SkipSelf()
  A parameter decorator to be used on constructor parameters which tells the 
  DI framework to start dependency resolution from the parent injector.
  Rwsolution works upward through , the injector hierarchy , so the local injector is not checked for a provider
  */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
