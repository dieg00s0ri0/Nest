// creo una constante con un valor 
// le pongo export para que lo pueda exportar en otro lugar
//si no le agrego export no se podra importar
export const name='Diego';

// puedo ponerle o no el tipo de dato
const age: number=23;

const insValid:boolean =true;
//constante no se puede cambiar el valor
//let si se puede cambiar el valor


//name='Diego2'; error es una constante
// let name='Diego';
//name='Diego2'; asi si se puede

//template string

export const templateString =`Esto es un string
multilinea
que puede terner
" dobles
' simple
inyectar valores ${name}
expresiones ${5+5}
booleanos ${insValid}
o asta mandar a llamar funciones`