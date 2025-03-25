import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'big-data-charts';
  constructor(private globalService: GlobalService) {
    if (typeof document !== 'undefined') {
      this.changeTheme();
    }
  }
  changeTheme() {
    if (this.globalService.theme == 'Dark') {
      document.body.style.backgroundColor = '#1E1E1E';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }
}
