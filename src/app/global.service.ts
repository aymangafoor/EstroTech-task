import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public theme: string = 'Dark'; // ✅ Global variable

  setTheme(newTheme: string) {
    this.theme = newTheme; // ✅ Update global variable
  }

  getTheme(): string {
    return this.theme; // ✅ Get global variable
  }
}
