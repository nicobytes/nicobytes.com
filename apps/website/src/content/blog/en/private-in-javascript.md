---
title: 'Privacidad en JavaScript: Propiedades y Métodos Privados Nativos con Hashtag'
description: 'Usando la función toSignal puedes transformar observables en signals, simplificando la transición y reutilizando código existente.'
pubDate: '2024-10-14T00:06:59.246Z'
heroImage: '/posts/private-in-js/80-blog.jpg'
categories: ['JavaScript', 'TypeScript', 'Privacy']
draft: true
lang: "es"
langLink: '/blog/en/privacidad-en-javascript/'
---


# Privacy in JavaScript: Native Private Properties and Methods with Hashtags

JavaScript now allows developers to declare private methods and properties directly using a hashtag (#), enabling native privacy without relying on TypeScript.

## Native Privacy with Hashtags

Before this update, developers used conventions like the underscore (_) to indicate that a property should be "private," but this did not guarantee true privacy. With TypeScript, the `private` keyword was introduced, which offered some protection during development, but this privacy was lost once the code was transpiled to JavaScript.

The recent update to JavaScript allows declaring private properties and methods with a hashtag (#), ensuring privacy at runtime and guaranteeing that they cannot be accessed from outside the class.

## Comparison between TypeScript and JavaScript

### Privacy in TypeScript

In TypeScript, `private` is used to declare private properties and methods:

```typescript
class ProductService {
  private products: string[] = [];

  private addProduct(product: string) {
    this.products.push(product);
  }
}
```

Although this privacy is effective during development, it is lost once the code is converted to JavaScript.

### Private Properties in JavaScript with Hashtags

JavaScript now allows declaring private properties and methods using a hashtag (#), which ensures their privacy even at runtime:

```javascript
class ProductService {
  #products = [];

  #addProduct(product) {
    this.#products.push(product);
  }
}
```

In this example, `#products` and `#addProduct` cannot be accessed from outside the class, maintaining the security and integrity of the code.

## Practical Example: `ProductService` Class

Let's look at a practical example with the `ProductService` class using hashtags for privacy:

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

In this example, `#products` and `#addProduct` are protected from external access, enhancing security and reducing the likelihood of unintended modifications.

## Impact on Web Development

The incorporation of native private properties and methods significantly improves code security and quality. Developers can now create better encapsulated and more maintainable classes, which facilitates the evolution of projects over time.

## Conclusion

Native privacy in JavaScript represents a major advancement for developers, as it improves security and simplifies the development of robust web applications. I hope this explanation encourages you to adopt this new functionality in your projects.

If you have questions or topics you'd like me to address in future articles, feel free to leave your comments. See you next time!