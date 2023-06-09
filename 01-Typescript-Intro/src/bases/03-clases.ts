export class clase{
    public id:number;
    public name: string;

    constructor(id:number, name: string){
        this.id=id;
        this.name=name;
    }
}

// instanciamos la clase
export const objeto = new clase(4,'diegoxd');