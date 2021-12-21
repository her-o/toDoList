export class Task {

    id!: number;
    text:string;
    isEditable!: boolean;
    completed!:boolean;

    constructor(text:string) {
        this.text = text;
        this.completed = false;
    }

    setText(text:string) {
        this.text = text;
    }
}
