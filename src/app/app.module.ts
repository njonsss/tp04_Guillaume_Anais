
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor( router: Router) {
     // tslint:disable-next-line:curly
     if (!returnUrl) return;
     localStorage.removeItem('returnUrl');
     router.navigateByUrl(returnUrl);
   });
 }
}