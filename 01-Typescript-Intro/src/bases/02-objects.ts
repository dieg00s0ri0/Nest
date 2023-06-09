export const arreglo=[1,2,3,4,5,6];

arreglo.push(7);

//podenos generar una interface oara declarar de que tipo de datos tiene q ser los campos de un objeto
//si no se genera la interface se puede asignar cualquier tipo de dato al objeto

interface validar_objeto{
    id:number;
    name:string;
    //si la edad se requiere que sea opcional que se ingrese o no se le pone un signo de interrogacion
    edad?:number;
}

// declarar un objeto que sea de tipo validar_objeto1 para que pueda validar sus campos
export const objeto1:validar_objeto={
    id:1,
    name:'diego',
}
export const objeto2:validar_objeto={
    id:2,
    name:'diego2',
}
// como se imprime en el main objeto1.campo
// se puede declarar una const que sea de dos tipos de datos const campo:number | string 

//arreglo de objetos

export const arreglo_objetos:validar_objeto[]=[];

//le agrego los objetos
arreglo_objetos.push(objeto1,objeto2);