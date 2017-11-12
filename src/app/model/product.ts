export class Product{

    constructor(public id:string, public pname:string, 
        public description:string, public price:number){

    }

    isEmptyyy():boolean{
        console.log('isEmpty()....');
        return this.id==null && this.pname==null && this.price<=0;
    }
}