export interface Categoria {
    id?:number,
    descripcion:string
}

export interface Marca {
    id?:number,
    nombre:string
}

export interface Modelo {
    id?:number,
    nombre:string
}

export interface Descripcion {
    id_tabla: number,
    id_orden: number,
    descripcion: string,
    id: number
}

export interface Producto {
    id:number,
    nombre:string,
    descripcion:string,
    garantia:number,
    id_marca:number,
    id_modelo:number,
    id_categoria:number,
    id_estado:number,
    cantidad?:number,
    path?:string    
}