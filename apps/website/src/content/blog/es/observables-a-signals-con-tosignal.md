---
title: 'Obersables a Signals con toSignal'
description: 'Whisper is an AI model from OpenAI that allows you to convert any audio to text with high quality and accuracy.'
pubDate: '2024-09-02T00:06:59.246Z'
heroImage: '/posts/01_whisper.jpg'
categories: ['Angular', 'Python']
draft: true
lang: "es"
langLink: '/blog/en/how-to-use-whisper/'
---

# Angular y Reactividad: Signals y RxJS

La reactividad en Angular ha evolucionado significativamente, especialmente con la introducción de Signals. En este artículo, discutiremos cómo trabajar con Angular, Reactividad, Signals y RxJS. Aprenderás a transformar observables en Signals usando la función `toSignal`, facilitando así la transición y reutilización de código existente en tus aplicaciones Angular.

## Introducción a Signals en Angular

### ¿Qué son los Signals?

Signals es un nuevo modelo de reactividad en Angular que busca ofrecer un rendimiento más granular y un mejor control sobre el renderizado. Este modelo complementa a RxJS, que ha sido una referencia durante años en el manejo de reactividad y flujos de datos asíncronos en Angular.

### Ventajas de Utilizar Signals

La principal ventaja de Signals es su reactividad granular. Mientras RxJS y sus observables ofrecen un robusto sistema de manejo de datos en tiempo real, Signals permite un mejor control sobre el renderizado, reduciendo el overhead y mejorando el rendimiento de la aplicación.

### ToSignal: La Función de Transición

`toSignal` es una función que permite transformar observables de RxJS en Signals. Esto facilita la reutilización del código de negocio existente mientras abrazamos este nuevo modelo de reactividad. `toSignal` es especialmente útil para mantener la lógica de negocios en RxJS, al tiempo que se utilizan Signals para el renderizado y otros aspectos de la UI.

## Implementación Básica de ToSignal

### Creando un Observable

Veamos un ejemplo sencillo donde creamos un observable básico en Angular:

```typescript
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h2>Estado: {{ state }}</h2>
    <button (click)="changeValue()">Change Value</button>
  `,
})
export class AppComponent {
  state$: Observable<string>;
  state: string = '';

  constructor() {
    this.state$ = of('Initial Value');
  }

  changeValue() {
    this.state$.subscribe(value => this.state = value);
  }
}
```

### Transformando el Observable a Signal

Ahora, transformemos este observable en un Signal usando `toSignal`:

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  template: `
    <h2>Estado: {{ state() }}</h2>
    <button (click)="changeValue()">Change Value</button>
  `,
})
export class AppComponent {
  state: Signal<string>;

  constructor() {
    this.state = toSignal(of('Initial Value'), { initialValue: '' });
  }

  changeValue() {
    this.state.set('New Value');
  }
}
```

## Flags de ToSignal

### Initial Value

Este flag se usa cuando trabajamos con observables que no tienen un valor inicial. Permite configurar un valor inicial de manera que el Signal siempre tenga un valor para renderizar.

#### Ejemplo

```typescript
const state$ = new BehaviorSubject<string>('Initial Value');
const state = toSignal(state$, { initialValue: 'Default Value' });
```

### Require Sync

Este flag sincroniza el Signal con el valor inicial del observable si este tiene un valor inicial.

#### Ejemplo

```typescript
const state$ = new BehaviorSubject<string>('Initial Value');
const state = toSignal(state$, { requireInit: true });
```

### Reject Errors

En caso de que el observable genere un error, este flag permite que el Signal mantenga su último valor válido.

#### Ejemplo

```typescript
const state$ = new Subject<string>();
state$.error(new Error('Something went wrong'));
const state = toSignal(state$, { rejectErrors: true, initialValue: 'Fallback Value' });
```

## Ejemplo Real: Integración con HTTP Client

### Servicio HTTP

Supongamos que tenemos un servicio que obtiene datos desde una API:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('https://api.example.com/data');
  }
}
```

### Componente Consumiendo el Servicio

Transformemos el observable del servicio en un Signal:

```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-data',
  template: `
    <div *ngIf="data()">
      <pre>{{ data() | json }}</pre>
    </div>
  `,
})
export class DataComponent implements OnInit {
  data: Signal<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = toSignal(this.dataService.getData(), { initialValue: {} });
  }
}
```

## Consideraciones Éticas y Futuras

### Privacidad de los Datos

Al manipular datos, especialmente con servicios HTTP, es crucial manejar la privacidad y la seguridad de los mismos. Asegúrate de implementar medidas de autenticación y autorización adecuadas.

### Uso Responsable de RxJS y Signals

Ambos modelos de reactividad deben usarse de manera responsable. RxJS sigue siendo potente y relevante, y Signals ofrece nuevas maneras de optimizar. La combinación de ambos, utilizada de manera inteligente, puede resultar en aplicaciones eficientes y fáciles de mantener.

### Mirada al Futuro

Angular está continuamente evolucionando. La tendencia sugiere que Signals jugarán un papel crucial en el futuro desarrollo de aplicaciones Angular, ofreciendo mejores patrones de reactividad y rendimiento mejorado.

## Conclusión

La función `toSignal` facilita la adopción y utilización del nuevo modelo de reactividad de Angular sin tener que abandonar la robusta lógica construida con RxJS. La clave está en identificar los casos de uso adecuados y emplear las banderas como `initialValue`, `requireSync`, y `rejectErrors` según la necesidad del proyecto.

Implementar Signals puede transformar la forma en que tus aplicaciones Angular manejan la reactividad, proporcionando un rendimiento más granular y una gestión más sencilla del estado de la UI.

Asegúrate de estar suscrito a este canal y comparte este artículo si te resultó útil. ¡Hasta la próxima!