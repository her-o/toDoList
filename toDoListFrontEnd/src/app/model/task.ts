export class Task {

    id!: number;
    text:string;

    constructor(text:string) {
        this.text = text;
    }

    setText(text:string) {
        this.text = text;
    }
}
