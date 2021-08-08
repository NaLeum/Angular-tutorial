import { Component } from '@angular/core';

// AppComponent를 컴포넌트로 만들어주는 앵귤러의 api  
@Component({
  // 컴포넌트의 태그 네임
  selector: 'app-root',
  // html 파일
  templateUrl: './app.component.html',
  // 스타일 css
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
}
