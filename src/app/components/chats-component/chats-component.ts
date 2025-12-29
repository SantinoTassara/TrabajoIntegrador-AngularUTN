import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-chats-component',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './chats-component.html',
  styleUrl: './chats-component.css',
  standalone: true
})
export class ChatsComponent {
  searchChat = signal('');

  filteredChats = computed(() => {
    const chatSearch = this.searchChat().toLowerCase();
    const chats = this.chatService.chats();
    if (!chatSearch) {
      return chats;
    }
    return chats.filter(chat => chat.name.toLowerCase().includes(chatSearch));
  });

  constructor(public chatService: ChatService, private router: Router) {

  }

  open(id: string) {
    //Redireccion hacia un chat
    this.router.navigate(['/chats', id])
  }

  nuevo() {
    this.router.navigate(['/nuevo'])
  }

  inicio() {
    this.router.navigate(['/'])
  }

}