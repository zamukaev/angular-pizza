export type PizzaTypeInterface = "тонкое" | "традиционное";
export type PizzaSizeInterface = 26 | 30 | 40;
export interface PizzaInterface {
    id: number,
    articul: string,
    title: string,
    price: number,
    img: string,
    type: PizzaTypeInterface[],
    size: PizzaSizeInterface[],
    rating: number,
    categories: number
}