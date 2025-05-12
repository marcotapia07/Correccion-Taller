import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, orderBy } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Message {
  text: string;
  createdAt: number;
  sender: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private firestore: Firestore) {}

  getMessages(): Observable<Message[]> {
    const messagesRef = collection(this.firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));
    return collectionData(q, { idField: 'id' }) as Observable<Message[]>;
  }

  sendMessage(text: string, sender: string) {
    const messagesRef = collection(this.firestore, 'messages');
    const message: Message = {
      text,
      createdAt: Date.now(),
      sender
    };
    return addDoc(messagesRef, message);
  }

  async saveFormData(data: any) {
    try {
      const docRef = await addDoc(collection(this.firestore, 'formData'), data);
      console.log('Formulario guardado con ID: ', docRef.id);
    } catch (e) {
      console.error('Error añadiendo documento: ', e);
    }
  }

  getFormData(): Observable<any[]> {
    const formDataRef = collection(this.firestore, 'formData');
    return collectionData(formDataRef, { idField: 'id' }) as Observable<any[]>;
  }
}

