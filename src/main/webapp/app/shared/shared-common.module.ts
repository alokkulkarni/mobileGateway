import { NgModule } from '@angular/core';

import { MobileGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MobileGatewaySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MobileGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MobileGatewaySharedCommonModule {}
