---
title: Posicionamiento con css
description: Propiedad position en css y sus usos.
# img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
img: https://cdn.pixabay.com/photo/2016/11/04/13/31/css-1797778_960_720.jpg
alt: nice image
author: 
  name: Nacho
  bio: Para que nos conozcamos un poco mejor ... 
  img: /yo.jpg
tags: "CSS"
date: '2020-01-02'
---

## Position 
<br>
La propiedad positions nos ayuda a posicionar un elemento en el documento html y admite los siguientes valores:

- **static**:  es el valor por defecto
- **relative**: el elemento de desplaza respecto a su posición normal, el resto de elementos continuan es su posición ignorando al que se desplaza.
- **absolute**: el elemento de desplaza respecto al primer elemento contenedor posicionado, dejando su espacio para que sea ocupado por el resto de elementos del documento.
- **fixed**: permite fijar un elemento respecto al viewport, el elemento no se desplazara aunque se haga scroll en la ventana.

Para indicar la posición del elemento con la propiedad position se utilizan las propiedades:

- **top**: posicionamiento respecto a la parte superior.
- **bottom**: posicionamiento respecto a la parte inferior.
- **left**: posicionamiento respecto a la izquierda.
- **right**: posicionamiento respecto a la derecha.  
<br>
Si top y bottom están especificados a la vez top gana sobre bottom y si el conflicto es entre left y right left gana cuando el contenido es ltf (español, ingles...) y raight cuando el contenido es rtl (arabe, persa...)  
<br>

Vista la teoría básica veamos unos ejemplos. 

**Static**: como hemos dicho esta es la propiedad por defecto por lo tanto no hay que indicar nada en el css el resultado seria el siguiente.

![alt text](/img/css/css-position-one.png "css position")

**Relative**: hemos añadido al cuadrado azul la clase position con los valores que ves a continuación y cómo ves en el resultado el cuadrado se desplaza desde su posición original sin liberar el espacio que ocupaba antes de ser modificado.

```css
.position {
  position: relative;
  top: 50px;
  left: 50px;
}
```
![alt text](/img/css/css-position-two.png "css position")

**Absolute**: realizamos la mismo que en el ejemplo anterior pero con la posición absolute, como puedes ver  el movimiento del cuadrado azul ahora es respecto de la esquina izquierda superior del contenedor de los cuadrados y deja su espacio libre para que sea ocupado por el cuadrado verde.
```css
.position {
  position: absolute;
  top: 50px;
  left: 50px;
}
```
![alt text](/img/css/css-position-tree.png "css position")

**Fixed**: como hemos dicho esto sitúa el elemento respecto al viewport con el código css de mas abajo lo dejarías fijo en la esquina inferior derecha, como un botón flotante, te recomiendo que realices el ejemplo para ver el resultado.
```css
.position {
  position: fixed;
  bottom: 10px;
  left: 90%;
}
```
Con esto ya tines unas nociones básicas sobre la propiedad position y su funcionamiento ahora solo queda practicar.

un saludo.