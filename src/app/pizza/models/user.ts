import { PizzaInterface } from "./pizza";

export interface UserInterface {
    id?: number;
    username: string | null;
    email: string | null;
    password: string | null;
    basket?: PizzaInterface[]
}