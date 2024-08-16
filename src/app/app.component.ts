
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'register',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'app';
}
