import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgCCTVService } from './ng-cctv.service';
import { NgCCTVComponent } from './ng-cctv.component';

export *  from './ng-cctv.component';
export * from './ng-cctv.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgCCTVComponent
  ],
  exports: [
    NgCCTVComponent
  ]
})
export class NgCCTVModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgCCTVModule,
      providers: [NgCCTVService]
    };
  }
}
