export class Feedback{
    //name is undefined at first, but is treated like a string anyway
    name:string | undefined;
    //Ambient declaration:
    declare gender : string;
    //Definite assignment assertion
    rating!: string;
    comment!: string;
}