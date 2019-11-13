export class Department {
    public constructor (
        public id: number,
        public name:string,
        public description:string,
        public isactive:boolean,
        public createdby :string ,
        public createddate:Date,
        public  modifiedby:string,
        public modifieddate:Date,
        public organizationid:number
    ){}
}
