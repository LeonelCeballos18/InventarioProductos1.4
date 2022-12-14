class Producto{
    constructor(codigo, nombre, cantidad, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.siguiente = null;
        this.anterior = null;
        this.ultimo = null;
    }

    getCodigo(){
        return this.codigo;
    }

    getNombre(){
        return this.nombre;
    }

    getCantidad(){
        return this.cantidad;
    }

    getPrecio(){
        return this.precio;
    }

    info() {
		return `
			<p>
				${this.codigo}-. Producto: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.precio}
			</p>`
	}
}
