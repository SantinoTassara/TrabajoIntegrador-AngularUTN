import { Routes } from '@angular/router';
import { NewChatComponent } from './components/new-chat-component/new-chat-component';
import { ChatDetailComponent } from './components/chat-detail-component/chat-detail-component';
import { EmptyChatComponent } from './components/empty-chat/empty-chat.component';
import { ChatsComponent } from './components/chats-component/chats-component';

export const routes: Routes = [
    {
        path: 'chats', component: ChatsComponent,
    },
    {
        path: 'chats/:id', component: ChatDetailComponent,
    },
    {
        path: 'nuevo', component: NewChatComponent
    }
];



