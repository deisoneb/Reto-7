"use strict";
// Guía de Tipos en TypeScript
// 1. Tipos de datos primitivos
let nombre = "Alice";
let edad = 30;
let esEstudiante = true;
console.log(`Nombre: ${nombre}, Edad: ${edad}, Es estudiante: ${esEstudiante}`);
// 2. Enumeraciones
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["Lunes"] = 0] = "Lunes";
    DiaSemana[DiaSemana["Martes"] = 1] = "Martes";
    DiaSemana[DiaSemana["Miercoles"] = 2] = "Miercoles";
    DiaSemana[DiaSemana["Jueves"] = 3] = "Jueves";
    DiaSemana[DiaSemana["Viernes"] = 4] = "Viernes";
    DiaSemana[DiaSemana["Sabado"] = 5] = "Sabado";
    DiaSemana[DiaSemana["Domingo"] = 6] = "Domingo";
})(DiaSemana || (DiaSemana = {}));
let diaFavorito = DiaSemana.Viernes;
console.log(`Día favorito: ${DiaSemana[diaFavorito]}`);
// 3. Any y Unknown
let datoDesconocido = 4;
datoDesconocido = "ahora soy un string";
datoDesconocido = true;
console.log(`Dato desconocido: ${datoDesconocido}`);
let valorUnknown = 4;
if (typeof valorUnknown === "number") {
    let numeroSeguro = valorUnknown;
    console.log(`Valor unknown como número: ${numeroSeguro}`);
}
let idUsuario = "abc123";
idUsuario = 123;
console.log(`ID de usuario: ${idUsuario}`);
let usuario = { nombre: "Bob", edad: 25 };
console.log(`Usuario: ${JSON.stringify(usuario)}`);
// 5. Tipos de colección
// Array
let numeros = [1, 2, 3, 4, 5];
console.log(`Números: ${numeros}`);
// Tupla
let coordenadas = [10, 20];
console.log(`Coordenadas: ${coordenadas}`);
// Set
let conjuntoNumeros = new Set([1, 2, 3, 4, 5]);
console.log(`Conjunto de números: ${[...conjuntoNumeros]}`);
// Map
let mapaUsuarios = new Map();
mapaUsuarios.set("Alice", 30);
mapaUsuarios.set("Bob", 25);
console.log(`Mapa de usuarios: ${[...mapaUsuarios]}`);
// Función que utiliza la interfaz Producto
function mostrarProducto(producto) {
    console.log(`
    ID: ${producto.id}
    Nombre: ${producto.nombre}
    Precio: $${producto.precio}
    En stock: ${producto.enStock ? "Sí" : "No"}
  `);
}
// Uso de tipos genéricos para crear funciones reutilizables
function primerElemento(arr) {
    return arr[0];
}
// Uso de tipos de retorno explícitos en funciones
function sumar(a, b) {
    return a + b;
}
// Ejemplo de uso en un proyecto real: Sistema de gestión de inventario
class Inventario {
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    buscarProductoPorId(id) {
        return this.productos.find(p => p.id === id);
    }
    actualizarStock(id, nuevoStock) {
        const producto = this.buscarProductoPorId(id);
        if (producto) {
            producto.enStock = nuevoStock;
        }
    }
    listarProductos() {
        this.productos.forEach(mostrarProducto);
    }
}
// Uso del sistema de inventario
const inventario = new Inventario();
inventario.agregarProducto({
    id: 1,
    nombre: "Laptop",
    precio: 999.99,
    enStock: true
});
inventario.agregarProducto({
    id: 2,
    nombre: "Smartphone",
    precio: 599.99,
    enStock: false
});
console.log("Listado de productos:");
inventario.listarProductos();
inventario.actualizarStock(2, true);
console.log("\nProducto actualizado:");
console.log(inventario.buscarProductoPorId(2));
// Ejemplo de uso de función genérica
const numeros2 = [1, 2, 3, 4, 5];
console.log(`\nPrimer elemento del array: ${primerElemento(numeros2)}`);
// Ejemplo de uso de función con tipo de retorno explícito
console.log(`\nSuma de 5 y 3: ${sumar(5, 3)}`);
