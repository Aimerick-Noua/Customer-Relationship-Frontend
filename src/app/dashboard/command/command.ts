export interface Command {
    products: Product[];
  }
  
  export interface Product {
    name: string;
    description: string;
    quantity: number;
    price: number;
  }