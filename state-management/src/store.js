import {  makeAutoObservable } from 'mobx';

class Store{
    name="osman";
    
    constructor(){
        makeAutoObservable(this);
    }

    setName=()=>{
        this.name="ali";
        console.log(this.name);
    }
}

export default new Store();