import { Component } from '@angular/core';

@Component({
    selector: 'app-empty-chat',
    standalone: true,
    template: `
    <div class="empty-chat-container">
      <h2>Bienvenido</h2>
      <p>Selecciona un chat de la lista para comenzar a chatear.</p>
    </div>
  `,
    styles: [`
    .empty-chat-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
      color: var(--color-text-muted);
      background-color: var(--color-bg-base);
    }
    h2 { margin-bottom: var(--space-2); color: var(--color-text-main); }
  `]
})
export class EmptyChatComponent { }
