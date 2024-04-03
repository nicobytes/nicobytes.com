import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
  IonMenuButton
} from '@ionic/angular/standalone';

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
  ],
})
export default class GemmaPage {

  constructor() { }

}
