export class Product{
    id:number;
    product_name:string;
    upload_date:Date;
    description:string;
    price:number;
    active:boolean;

    constructor(id:number, product_name:string, upload_date:Date, description:string, price:number, active:boolean)
    {
        this.id = id;
        this.product_name = product_name;
        this.upload_date = upload_date;
        this.description = description;
        this.price = price;
        this.active = active;
    }
}