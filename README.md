# Cenco Shopping

Esto proyecto es el backend de un ecommerce de ejemplo. La idea es que un candidato pueda 
terminar o avanzar la implementación de este proyecto.

## Instalación

Usa el manejador de paquetes de nodejs [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 
para instalar las dependencias

```bash
npm install
```

## Correr el servicio

```bash
npm run start
```

## Ejecutar las pruebas

```bash
npm run test
```

## Que debes hacer

Para poder conseguir el objetivo debes terminar de implementar el **checkout**. 
Puedes cambiar todo el código sin problemas. Se evaluarán aspectos como código limpio,
pruebas, patrones y arquitectura.

El checkout deberia retornar el total de los productos, el total a pagar, 
el total de los descuentos y una lista con los los códigos de los productos que se estan procesando. 
Esta implementación esta bien o faltará algo?

## ✨ Solucion

Se implementa `handleProductCodes` que retorna la lista con los códigos de los productos, `handleTotals`
que retorna el totales de la compra y sus respectivas pruebas en el archivo `product-service.spec.js`.

Para realizar una peticion al endpoint **checkout** mediante Post, en el body se envia un array de objetos
con los productos a comprar.

- Peticion **Post** de ejemplo:

   ```json
    [
        { 
            "code": "BJX", 
            "name": "blue jeans X", 
            "price": 100, 
            "discount": 5 
        },
        { 
            "code": "BT", 
            "name": "blue t-shit", 
            "price": 100, 
            "discount": 20 
        }
    ]
   ```

### 📝 Corrección

Se corrije problema que al realizar una peticion al endpoint **/product/:code** se generaba un problema en 
la funcion `getProductByCode` la que retornaba: `ReferenceError: req is not defined`.
