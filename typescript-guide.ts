// Guía de Tipos en TypeScript

// 1. Tipos de datos primitivos
let nombre: string = "Alice";
let edad: number = 30;
let esEstudiante: boolean = true;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Es estudiante: ${esEstudiante}`);

// 2. Enumeraciones
enum DiaSemana {
  Lunes,
  Martes,
  Miercoles,
  Jueves,
  Viernes,
  Sabado,
  Domingo
}
let diaFavorito: DiaSemana = DiaSemana.Viernes;

console.log(`Día favorito: ${DiaSemana[diaFavorito]}`);

// 3. Any y Unknown
let datoDesconocido: any = 4;
datoDesconocido = "ahora soy un string";
datoDesconocido = true;

console.log(`Dato desconocido: ${datoDesconocido}`);

let valorUnknown: unknown = 4;
if (typeof valorUnknown === "number") {
  let numeroSeguro: number = valorUnknown;
  console.log(`Valor unknown como número: ${numeroSeguro}`);
}

// 4. Tipos de unión e intersección
type StringONumero = string | number;
let idUsuario: StringONumero = "abc123";
idUsuario = 123;

console.log(`ID de usuario: ${idUsuario}`);

interface Nombre {
  nombre: string;
}
interface Edad {
  edad: number;
}
type Persona = Nombre & Edad;
let usuario: Persona = { nombre: "Bob", edad: 25 };

console.log(`Usuario: ${JSON.stringify(usuario)}`);

// 5. Tipos de colección
// Array
let numeros: number[] = [1, 2, 3, 4, 5];

console.log(`Números: ${numeros}`);

// Tupla
let coordenadas: [number, number] = [10, 20];

console.log(`Coordenadas: ${coordenadas}`);

// Set
let conjuntoNumeros: Set<number> = new Set([1, 2, 3, 4, 5]);

console.log(`Conjunto de números: ${[...conjuntoNumeros]}`);

// Map
let mapaUsuarios: Map<string, number> = new Map();
mapaUsuarios.set("Alice", 30);
mapaUsuarios.set("Bob", 25);

console.log(`Mapa de usuarios: ${[...mapaUsuarios]}`);

// 6. Buenas prácticas y aplicación en un proyecto real

// Uso de interfaces para definir la estructura de objetos
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  enStock: boolean;
}

// Función que utiliza la interfaz Producto
function mostrarProducto(producto: Producto): void {
  console.log(`
    ID: ${producto.id}
    Nombre: ${producto.nombre}
    Precio: $${producto.precio}
    En stock: ${producto.enStock ? "Sí" : "No"}
  `);
}

// Uso de tipos genéricos para crear funciones reutilizables
function primerElemento<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Uso de tipos de retorno explícitos en funciones
function sumar(a: number, b: number): number {
  return a + b;
}

// Ejemplo de uso en un proyecto real: Sistema de gestión de inventario
class Inventario {
  private productos: Producto[] = [];

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
  }

  buscarProductoPorId(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  actualizarStock(id: number, nuevoStock: boolean): void {
    const producto = this.buscarProductoPorId(id);
    if (producto) {
      producto.enStock = nuevoStock;
    }
  }

  listarProductos(): void {
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