import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Debugapp';
  ngOnInit() 
  {
  }
  @HostListener('window:keydown', ['event'])
  onKeyPress(event: KeyboardEvent) {
    
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 67) {
        event.preventDefault();
      }
      if ((event.ctrlKey || event.metaKey) && event.keyCode == 86) {
        event.preventDefault();
      }
    if (event.keyCode == 123 || event.keyCode == 116) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode == 82) {
      event.preventDefault();
    }
    if (event.altKey && event.keyCode == 37) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode == 85) {
      event.preventDefault();
    }
    if (event.ctrlKey && event.keyCode == 83) {
      event.preventDefault();
    }
  }
  @HostListener('window:contextmenu', ['event'])
  onclick(event: MouseEvent) {
    if (event.button == 2) {
      event.preventDefault();
    }
  }
}
