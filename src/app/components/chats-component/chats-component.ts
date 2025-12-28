import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ChatService } from '../../services/chat';


@Component({
  selector: 'app-chats-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './chats-component.html',
  styleUrl: './chats-component.css',
  standalone: true
})
export class ChatsComponent {
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