import { Component, OnChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnChanges {
  title = 'big-data-charts';
  ngOnChanges(changes: any) {
    // changes.prop contains the old and the new value...
    console.log('changes are', changes);
  }
}
