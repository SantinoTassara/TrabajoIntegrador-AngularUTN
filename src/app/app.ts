import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatsComponent } from './components/chats-component/chats-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabajoIntegrador');
}
