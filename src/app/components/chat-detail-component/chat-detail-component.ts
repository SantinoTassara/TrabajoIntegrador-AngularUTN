import { Component, computed, Signal } from '@angular/core';
import { Chat } from '../../../interfaces/chat';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chat';

import { RelativeTimePipePipe } from '../../pipes/relative-time-pipe-pipe';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-chat-detail-component',
  imports: [CommonModule, FormsModule, /*RelativeTimePipePipe*/],
  templateUrl: './chat-detail-component.html',
  styleUrl: './chat-detail-component.css',
})
export class ChatDetailComponent {
  chatSignal!: Signal<Chat | undefined>
  newText = '';
  private id?: string;

  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService
  ) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ?? undefined;
      if (this.id) {
        this.chatSignal = this.chatService.getChatSignal(this.id);
      } else {
        this.chatSignal = computed(() => undefined);
      }
    });
  }

  send() {
    if (!this.id || !this.newText.trim()) {
      //No se puede enviar si la condicion no es verdadera
      return;
    }
    this.chatService.sendMessage(this.id, this.newText.trim(), true);
    this.newText = '';

    setTimeout(() => {
      this.chatService.autoResponse(this.id!);
    }, 2000);

    setTimeout(() => {
      this.chatService.changeStageToLastConexion(this.id!);
    }, 6000);
  }


  formatDate(date: string) {
    if (!date) {
      return '';
    }
    const dateTime = new Date(date);
    return dateTime.toLocaleString();
  }
}
