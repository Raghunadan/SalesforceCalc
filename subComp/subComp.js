import { LightningElement,api,track } from 'lwc';
export default class SubComp extends LightningElement {
    @api val1=0;
    @api val2=0;
    @track result=0;

   @api sub(){
        this.result=this.val1-this.val2;
    }

}