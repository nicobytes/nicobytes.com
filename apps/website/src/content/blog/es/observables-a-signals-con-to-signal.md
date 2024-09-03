---
title: 'Observables a Signals con toSignal en Angular'
description: 'Whisper is an AI model from OpenAI that allows you to convert any audio to text with high quality and accuracy.'
pubDate: '2024-09-03T00:06:59.246Z'
heroImage: '/posts/observables-to-signals/cover.jpg'
categories: ['Angular', 'Rxjs', 'Signals']
draft: false
lang: "es"
langLink: '/blog/en/observables-to-signals-using-to-signal/'
---

La reactividad en Angular ha evolucionado significativamente, especialmente con la introducción de Signals. En este artículo, discutiremos cómo trabajar con Angular, Reactividad, Signals y RxJS. Aprenderás a transformar observables en Signals usando la función `toSignal`, facilitando así la transición y reutilización de código existente en tus aplicaciones Angular.

## ToSignal: La Función de Transición

Esta una función que permite transformar observables de RxJS en Signals. Esto facilita la reutilización del código de negocio existente mientras abrazamos este nuevo modelo de reactividad. `toSignal` es especialmente útil para mantener la lógica de negocios en RxJS, al tiempo que se utilizan Signals para el renderizado y otros aspectos de la UI.

## Implementación Básica de ToSignal

### Creando un Observable..

Veamos un ejemplo sencillo donde creamos un observable básico en Angular:

```angular-ts
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>state$: {{ state$ | async }}</h2>
    <input type="text" #input>
    <button (click)="change(input.value)">Change state</button>
  `,
})
export class AppComponent {
  state$ = new Subject<string>();

  change(newValue: string) {
    this.state$.next(newValue);
  }
}
```

### Transformando el Observable a Signal

Ahora, transformemos este observable en un Signal usando `toSignal`:

```angular-ts
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>state: {{ state() }}</h2>
    <input type="text" #input>
    <button (click)="change(input.value)">Change state</button>
  `,
})
export class AppComponent {
  state$ = new Subject<string>();
  state = toSignal(this.state$);

  change(newValue: string) {
    this.state$.next(newValue);
  }
}
```

## Flags de ToSignal

### Initial Value

Este flag se usa cuando trabajamos con observables que no tienen un valor inicial. Permite configurar un valor inicial de manera que el Signal siempre tenga un valor para renderizar.

#### Ejemplo

```angular-ts
state$ = new Subject<string>();
state = toSignal(this.state$, { initialValue: 'Initial Value' });

state(); // 'Initial Value'
```

### Require Sync

Este flag sincroniza el Signal con el valor inicial del observable si este tiene un valor inicial.

#### Ejemplo

```angular-ts
const state$ = new BehaviorSubject<string>('Initial Value');
const state = toSignal(state$, { requireSync: true });

state(); // 'Initial Value'
```

### Reject Errors

En caso de que el observable genere un error, este flag permite que el Signal mantenga su último valor válido.

#### Ejemplo

```angular-ts
const state$ = new BehaviorSubject<string>('Initial Value');
state$.error(new Error('Something went wrong'));
const state = toSignal(state$, { rejectErrors: true });

state(); // 'Initial Value'
```

## Ejemplo Real: Integración con HTTP Client

### Servicio HTTP

Supongamos que tenemos un servicio que obtiene datos desde una API:

```angular-ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private http = inject(HttpClient);

  getData() {
    return this.http.get('https://api.example.com/data');
  }
}
```

### Componente Consumiendo el Servicio

Transformemos el observable del servicio en un Signal:

```angular-ts
import { Component } from '@angular/core';
import { DataService } from './data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data',
  standalone: true,
  template: `
    @for(item of data() track $index) {
      <div>{{ item | json }}</div>
    }
  `,
})
export class DataComponent {
  private dataService = inject(DataService);
  data = toSignal(this.dataService.getData(), { initialValue: [] });
}
```

## Conclusión

La función `toSignal` facilita la adopción y utilización del nuevo modelo de reactividad de Angular sin tener que abandonar la robusta lógica construida con RxJS. La clave está en identificar los casos de uso adecuados y emplear las banderas como `initialValue`, `requireSync`, y `rejectErrors` según la necesidad del proyecto.

Implementar Signals puede transformar la forma en que tus aplicaciones Angular manejan la reactividad, proporcionando un rendimiento más granular y una gestión más sencilla del estado de la UI.

## Video Tutorial

Si quieres ver el video completo de como transformar observables a signals con `toSignal` en Angular, puedes verlo aquí:

<iframe class="w-full aspect-video" src="https://www.youtube-nocookie.com/embed/hoYIUe_e4Rs?si=KJIonl22ilMgRdze" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>