import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track num1 = 0;
    @track num2 = 0;

    // Handle input changes
    handleChange(event) {
        const label = event.target.label;
        if (label === "Enter num1") {
            this.num1 = parseFloat(event.target.value) || 0;
        } else if (label === "Enter num2") {
            this.num2 = parseFloat(event.target.value) || 0;
        }
    }

    // Placeholder for submit logic
    handleSubmit() {
        alert(`Num1: ${this.num1}, Num2: ${this.num2}`);
    }
    handleAddition(){
        this.template.querySelector("c-add-comp").add();
    }
    handleSubtraction(){
        this.template.querySelector("c-sub-comp").sub();
    }

}