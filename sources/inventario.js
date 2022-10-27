class Inventario{
    constructor(){
        this.primero = null;
    }

    agregar(nuevo){
        if (this.primero==null)
            this.primero=nuevo;
        else{
            let temp=this.primero;
        while (temp.siguiente!=null)
            temp=temp.siguiente;
            temp.siguiente=nuevo;
            nuevo.anterior = temp;
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
                lista+= `${aux.codigo}-. Producto: ${aux.nombre}, Cantidad: ${aux.cantidad}, Precio: ${aux.precio} <br>`
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
            return `${this.recursividad(nodo.siguiente)} ${nodo.codigo}-. Producto: ${nodo.nombre}, Cantidad: ${nodo.cantidad}, Precio: ${nodo.precio} <br>`;
        }
    }
}