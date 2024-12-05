---
title: 'Privacidad en JavaScript: Propiedades y Métodos Privados Nativos con Hashtag'
description: 'Usando la función toSignal puedes transformar observables en signals, simplificando la transición y reutilizando código existente.'
pubDate: '2024-10-14T00:06:59.246Z'
heroImage: '/posts/private-in-js/80-blog.jpg'
categories: ['JavaScript', 'TypeScript', 'Privacidad']
draft: true
lang: "es"
langLink: '/blog/en/private-in-javascript/'
---

JavaScript ahora permite declarar métodos y propiedades privadas directamente utilizando un hashtag (#), lo cual permite implementar privacidad de manera nativa sin depender de TypeScript.

## Privacidad Nativa con Hashtag

Antes de esta actualización, los desarrolladores usaban convenciones como el guion bajo (_) para indicar que una propiedad debía ser "privada", pero esto no garantizaba una verdadera privacidad. Con TypeScript, se introdujo la palabra clave `private`, que ofrecía cierta protección en el desarrollo, pero dicha privacidad se perdía una vez que el código se transpileaba a JavaScript.

La actualización reciente de JavaScript permite declarar propiedades y métodos privados con un hashtag (#), lo que asegura la privacidad en tiempo de ejecución y garantiza que no puedan ser accedidos desde fuera de la clase.

## Comparación entre TypeScript y JavaScript

### Privacidad en TypeScript

En TypeScript, se utiliza `private` para declarar propiedades y métodos privados:

```typescript
class ProductService {
  private products: string[] = [];

  private addProduct(product: string) {
    this.products.push(product);
  }
}
```

Aunque esta privacidad es efectiva durante el desarrollo, se pierde una vez que el código se convierte en JavaScript.

### Propiedades Privadas en JavaScript con Hashtag

JavaScript permite declarar propiedades y métodos privados usando un hashtag (#), lo que asegura su privacidad incluso en el entorno de ejecución:

```javascript
class ProductService {
  #products = [];

  #addProduct(product) {
    this.#products.push(product);
  }
}
```

En este ejemplo, `#products` y `#addProduct` no son accesibles desde fuera de la clase, lo que mantiene la seguridad e integridad del código.

## Ejemplo Práctico: Clase `ProductService`

Veamos un ejemplo práctico con la clase `ProductService` usando el hashtag para la privacidad:

```javascript
class ProductService {
  #products = [];

  #addProduct(product) {
    this.#products.push(product);
  }

  publicAddProduct(product) {
    this.#addProduct(product);
  }

  getProducts() {
    return this.#products;
  }
}
```

En este ejemplo, `#products` y `#addProduct` están protegidos contra el acceso externo, lo cual mejora la seguridad y reduce la posibilidad de modificaciones no deseadas.

## Impacto en el Desarrollo Web

La incorporación de propiedades y métodos privados nativos mejora significativamente la seguridad y la calidad del código. Los desarrolladores ahora pueden crear clases mejor encapsuladas y más fáciles de mantener, lo que facilita la evolución de los proyectos a lo largo del tiempo.

## Conclusión

La privacidad nativa en JavaScript representa un gran avance para los desarrolladores, ya que mejora la seguridad y simplifica el desarrollo de aplicaciones web robustas. Espero que esta explicación los motive a adoptar esta nueva funcionalidad en sus proyectos.

Si tienen preguntas o temas que les gustaría que aborde en futuros artículos, no duden en dejar sus comentarios. ¡Nos vemos en la próxima!