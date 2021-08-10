
export class Update {


    constructor(public firstname: string, public lastname: string,public regionValue :number,public email:string,
        public country:number, public ta:number ,public diseasestate:Array<String>=[],public product:Array<String>=[]
        ) { }


}