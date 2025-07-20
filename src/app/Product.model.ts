export class Product{
    productName: string;
    creationDate: Date;
    description: string;
    price: number;
    status: boolean;
    stock: number;

    //status:boolean, available: number

    constructor(productName:string, creationDate:Date, description:string, price:number, status:boolean, stock:number)
    {
        this.productName = productName;
        this.creationDate = creationDate;
        this.description = description;
        this.price = price;
        this.status = status;
        this.stock = stock;
    }
}