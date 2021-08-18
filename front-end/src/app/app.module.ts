import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// AppModule 를 꾸며주겠다.
// Module 은 독립 가능한 기능들의 상자이다. 
@NgModule({
  // 선언값
  declarations: [
    AppComponent,
  ],
  // 다른 모듈들
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 서비스로직
  providers: [],
  // 처음 실행한 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule { }
