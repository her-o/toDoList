export class CompletedTask {

    id!:number;
    text!:string;
    date!:string;

    constructor(text:string, date:string) {
        this.text = text;
        this.date = date;
    }
}
