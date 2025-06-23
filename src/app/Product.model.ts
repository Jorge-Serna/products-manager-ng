export class Product{
    productName:string;
    creationDate:Date;
    description:string;
    price:number;
    // status:boolean;
    // available:number;

    //status:boolean, available: number

    constructor(productName:string, creationDate:Date, description:string, price:number)
    {
        this.productName = productName;
        this.creationDate = creationDate;
        this.description = description;
        this.price = price;
        // this.status = status;
        // this.available = available;
    }
}