class Inventario{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo, code){
        if(this.primero === null) {
            this.primero = nuevo;
            this.ultimo = nuevo;
        } else {
            if(code < this.primero.codigo) {
                nuevo.siguiente = this.primero;
                this.primero = nuevo;
            } else {
                let temp = this.primero;
                while (temp != null) {
                    if(temp.codigo < code && temp.siguiente == null) {  // --> 3    1 2 4   1 2 3 4
                        this.ultimo.siguiente = nuevo;
                        nuevo.anterior = this.ultimo;
                        this.ultimo = nuevo;
                    } else if (temp.codigo < code && temp.siguiente.codigo > code) { // ---> 4  2 3 5 6   2 3 4 5 6
                        nuevo.siguiente = temp.siguiente;
                        temp.siguiente.anterior = nuevo;
                        temp.siguiente = nuevo;
                        nuevo.anterior = temp;
                    }
                    temp = temp.siguiente;
                }
            }
        }
    }

    eliminar(code){
        let aux = this.primero;
        if(this.primero !== null){
            if(this.primero.codigo === code){
                this.primero = null;
                this.primero = aux.siguiente;
            }
            while(aux.siguiente != null){
                if(aux.siguiente.codigo === code){
                    aux.siguiente = aux.siguiente.siguiente;
                    aux.anterior = aux.anterior;
                    break;
                }
                aux = aux.siguiente;
            }
        }
    }

    buscar(code){
        let aux = this.primero;
        while(aux !== null){
            if(aux.codigo === code){
                return aux;
            }
            aux=aux.siguiente;
        }
        return null;
    }

    listar(){
        let lista = "";
        let aux = this.primero;
        if(this.primero != null){
            while(aux != null){
                lista+= `${aux.codigo}-. producto: ${aux.nombre}, Cantidad: ${aux.cantidad}, Precio: ${aux.precio} <br>`
                aux = aux.siguiente;
            }
        }
        return lista;
    }

    listadoInverso(){
        if(this.primero !== null){
            return this.recursividad(this.primero)
        }
    }
    
    recursividad(nodo){
        if(nodo.siguiente === null){
            return nodo.primero;
        }else{
            return `${this.recursividad(nodo.siguiente)} ${nodo.codigo}-. producto: ${nodo.nombre}, Cantidad: ${nodo.cantidad}, Precio: ${nodo.precio} <br>`;
        }
    }
}