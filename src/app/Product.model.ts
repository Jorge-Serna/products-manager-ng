export class Product{
    productName: string;
    description: string;
    price: number;
    status: boolean;
    stock: number;
    category: number;

    //status:boolean, available: number

    constructor(productName:string, description:string, price:number, stock:number, status:boolean, category: number )
    {
        this.productName = productName;
        this.description = description;
        this.price = price;
        this.stock = stock;
        this.status = status;
        this.category = category;
    }
}