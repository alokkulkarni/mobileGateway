import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MobileGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MobileGatewaySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MobileGatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MobileGatewaySharedModule {
  static forRoot() {
    return {
      ngModule: MobileGatewaySharedModule
    };
  }
}
