import { Component, inject, signal, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import {
  IonHeader,
  IonFooter,
  IonToolbar,
  IonContent,
  IonTitle,
  IonProgressBar,
  IonNote,
  IonIcon,
  IonButton,
  IonText,
  IonList,
  IonItem,
  IonInput,
  IonButtons,
  IonMenuButton,
  IonLoading,
} from '@ionic/angular/standalone';
import { GemmaService } from '@app/services/gemma.service';
import { addIcons } from 'ionicons';
import { send } from 'ionicons/icons';
import { LoadingController } from '@ionic/angular';

interface Message {
  id: number;
  from: 'gemma' | 'user';
  text: string;
}

@Component({
  selector: 'app-gemma',
  templateUrl: './gemma.page.html',
  standalone: true,
  imports: [
    IonHeader,
    IonFooter,
    IonToolbar,
    IonContent,
    IonProgressBar,
    IonTitle,
    IonNote,
    IonIcon,
    IonButton,
    IonText,
    IonList,
    IonItem,
    IonInput,
    IonButtons,
    IonMenuButton,
    CommonModule,
    ReactiveFormsModule,
    IonLoading,
  ],
})
export default class GemmaPage implements OnInit {
  gemmaService = inject(GemmaService);
  loadingCtrl = inject(LoadingController);
  messages = signal<Message[]>([]);
  modelLoaded = signal(false);
  showLoading = signal(false);
  textareaCtrl = new FormControl('', { nonNullable: true });

  constructor() {
    addIcons({ send });
  }

  async ngOnInit() {
    console.log('init');
    await this.loadModel();
  }

  async loadModel() {
    this.showLoading.update((state) => !state);
    await this.gemmaService.loadGemmaModel();
    this.showLoading.update((state) => !state);
  }

  async sendMessage() {
    const message = this.textareaCtrl.value;
    this.textareaCtrl.setValue('');
    this.messages.update((messages) => [...messages, { from: 'user', text: message, id: new Date().getTime() }]);
    this.showLoading.update((state) => !state);
    const response = await this.gemmaService.generateResponse(message);
    this.showLoading.update((state) => !state);
    this.messages.update((messages) => [...messages, { from: 'gemma', text: response, id: new Date().getTime() }]);
  }

}
