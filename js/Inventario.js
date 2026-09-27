// Almacena los productos
class Inventario{
    constructor(){
        this.inventario = []; // Creamos un array para almacenar todos los datos
    }
    //Creamos los métodos

    // Recibimos un objeto 'Producto'
    agregar(producto){
        //Agregamos el producto al inventario
        this.inventario.push(producto);
        console.log("Producto Agregado");
    }

    // Listamos todos los productos
    listar(){
        let cadena="";
        //Mostramos los productos
        /*
        for(let i=0; i<this.inventario.length; i++){
            cadena+="Producto "+(i+1)+" : Código: "+this.inventario[i].codigo+" : Nombre: "+this.inventario[i].nombre+" : Cantidad: "+this.inventario[i].cantidad+" : Costo: "+this.inventario[i].costo;
            cadena+="\n";
        }*/

        for(let i=0; i<this.inventario.length; i++){
            cadena+= this.inventario[i].infoHTML();
            //cadena+="<br>"; // Saltamos al otro producto
        }
        //Retornamos la cadena
        return cadena;
    }

    // Mostramos los productos al inverso
    listarInverso(){
        let cadena="";

        for(let i=this.inventario.length-1; i>=0; i--){
            cadena+= this.inventario[i].infoHTML();
        }
        // Retornamos la cadena
        return cadena;
    }

    buscar(codigo){ // Me retorna el código (señala)
        for(let i=0; i<this.inventario.length; i++){
            if(this.inventario[i].codigo == codigo){
                return this.inventario[i]; // Retornamos el objeto (producto)
            }
        }
        return null;
    }

    eliminar(codigo){
        /*Qué necesitamos? Queremos eliminar un producto, cómo eliminamos ese producto, obtenemos el código del producto, del producto obtenemos el índice, recorremos los valores (lo eliminamos), qué debemos tener en cuenta que exista*/
        let indice=-1;
        let eliminado=false;

        //Obtenemos el índice del producto a eliminar mediante su código
        for(let i=0; i<this.inventario.length; i++){
            if(this.inventario[i].codigo == codigo)
                indice = i; //Obtenemos el índice
        }

        if(indice==-1){
            console.log("No existe");
            eliminado=false;
        }else if(indice==this.inventario.length-1){
            this.inventario.pop(); //Eliminamos
            eliminado=true;
        }
        else{
            for(let i=indice; i<this.inventario.length-1; i++){
                this.inventario[i]=this.inventario[i+1];
            }
            //Borramos el último elemento del array
            this.inventario.pop();
            console.log("El producto se eliminó");
            eliminado=true;
        }

        return eliminado;
    }

    agregarInicio(producto){
        /*Qué necesitamos? Queremos meter un producto al inicio del array, debemos recorrer los valores de atrás una posición extra, cuando quede libre la posición 0 metemos al producto*/

        for(let i=this.inventario.length-1; i>=0; i--){
            this.inventario[i+1]=this.inventario[i];
            if(i==0)
                //Implementamos el valor al inicio del array
                this.inventario[0]=producto;
        }
        
    }

    extraerPrimero(){
        //Retornamos el primer producto
        let producto = this.inventario[0]; //Lo guardamos antes de borrarlo

        if(this.inventario.length-1==0) this.inventario.pop(); //Eliminamos y ya
        else{
            for(let i=0; i<this.inventario.length-1; i++){
                this.inventario[i]=this.inventario[i+1];
            }
            //Borramos el último elemento del array
            this.inventario.pop();
        }
        return producto;
    }

    insertar(producto, posicion){
        for(let i=this.inventario.length-1; i>=posicion-1; i--){
            this.inventario[i+1]=this.inventario[i];
            if(i==posicion-1) this.inventario[i]=producto;
        }
    }

}



