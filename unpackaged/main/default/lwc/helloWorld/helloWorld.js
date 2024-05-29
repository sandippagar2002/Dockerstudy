import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    message = 'Hello 14th October Batch...';

    firstName;
    lastName;
    
    handleName(event){
        if(event.target.name == 'firstName'){
            console.log(event.target.value);
            this.firstName=event.target.value;
        }else if(event.target.name == 'lastName'){
            this.lastName=event.target.value;
        }
    }

    handleFirstName(event){
        console.log(event.target.value);
        this.firstName=event.target.value;

    }

    handleLastName(){
        console.log(event.target.value);
        this.lastName=event.target.value;
    }

    handleClick(){
        alert('Helo '+this.firstName+' '+this.lastName+' Welcome to LWC World');
    }

}