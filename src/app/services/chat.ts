import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Chat } from '../../interfaces/chat';
import { Message } from '../../interfaces/message';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  //Mook de chats guardados
  private _chats: WritableSignal<Chat[]> = signal(this.createMook());


  //Exposición de los chats como Signal, Readonly para que no pueda modificarse desde fuera. Solo podemos modificarlo desde el servicio.
  public readonly chats: Signal<Chat[]> = this._chats;

  constructor() { }

  private createMook(): Chat[] {
    //carga datos de prueba
    const now = new Date().toISOString();

    return [
      {
        id: '1',
        name: 'Juan Perez',
        lastMessage: 'Todo bien, vos?',
        image: 'user-circle.svg',
        stage: 'Online',
        messages: [
          {
            id: '1',
            text: 'Hola, como estas?',
            fromMe: false,
            date: now
          },
          {
            id: '2',
            text: 'Todo bien, vos?',
            fromMe: true,
            date: now
          }
        ]
      },
      {
        id: '2',
        name: 'Maria Lopez',
        lastMessage: 'Si, Dale',
        image: 'user-circle.svg',
        stage: 'Last conexion: 19:24',
        messages: [
          {
            id: '3',
            text: 'Vamos a almorzar?',
            fromMe: false,
            date: now
          },
          {
            id: '4',
            text: 'Si, Dale',
            fromMe: true,
            date: now
          }
        ]
      }
    ];
  }

  getChatsSnapshot(): Chat[] {
    return this._chats();
  }

  //Es una función para obtener un chat por id como Signal y puede retornar undefined si no lo encuentra
  getChatSignal(id: string): Signal<Chat | undefined> {
    return computed(() => {
      return this._chats().find(chat => chat.id === id);
    });
  }

  //Crear un nuevo chat
  createChat(name: string): Chat {
    const newChat: Chat = {
      id: Date.now().toString(),
      name: name,
      lastMessage: '',
      messages: [],
      image: 'user-circle.svg',
      stage: 'Online'
    };
    this._chats.update((chats) => { return [...chats, newChat] });
    return newChat;
  }

  sendMessage(chat_id: string, text: string, fromMe = true): Message | undefined {
    const new_message: Message = {
      id: Date.now().toString(),
      text: text,
      fromMe: fromMe,
      date: new Date().toISOString()
    }

    this._chats.update(
      (chats_actuales) => {
        return chats_actuales.map(
          (chat) => {
            if (chat.id !== chat_id) {
              return chat
            }
            const updated_messages = [...chat.messages, new_message]
            return {
              ...chat,
              messages: updated_messages,
              lastMessage: text
            }
          }
        )
      }
    )
    return new_message
  }

  autoResponse(chat_id: string) {
    const new_message: Message = {
      id: Date.now().toString(),
      text: 'Respuesta automatica',
      fromMe: false,
      date: new Date().toISOString()
    }
    this._chats.update(
      (chats_actuales) => {
        return chats_actuales.map(
          (chat) => {
            if (chat.id !== chat_id) {
              return chat
            }
            const updated_messages = [...chat.messages, new_message]
            return {
              ...chat,
              messages: updated_messages,
              lastMessage: 'Respuesta automatica'
            }
          }
        )
      }
    )
    this.chageStageToOnline(chat_id)
    return new_message
  }

  chageStageToOnline(chat_id: string) {
    this._chats.update(
      (chats_actuales) => {
        return chats_actuales.map(
          (chat) => {
            if (chat.id !== chat_id) {
              return chat
            }
            return {
              ...chat,
              stage: 'Online'
            }
          }
        )
      }
    )
  }

  changeStageToLastConexion(chat_id: string) {
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    this._chats.update(
      (chats_actuales) => {
        return chats_actuales.map(
          (chat) => {
            if (chat.id !== chat_id) {
              return chat
            }
            return {
              ...chat,
              stage: 'Last conexion: ' + new Date().toLocaleTimeString('es-ES', timeOptions) //Lograr que solo se muestre hora y minutos
            }
          }
        )
      }
    )
  }
}