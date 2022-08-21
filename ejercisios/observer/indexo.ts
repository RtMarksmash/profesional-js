interface Observer {
    update: (data: any) => void
}



interface subject{
    subscribe: (observer: Observer) =>void
    unsubscribe: (observer: Observer) => void
};

class BitCoinPrice implements subject { 
    observers: Observer[] = [];

    constructor(){
        const el:any = document.querySelector('#value');
        el.addEventListener('input',() => {
            this.notify(el.value)
        })
    
    }


    subscribe (observer: Observer) {
        this.observers.push(observer);
        
    }

    
    unsubscribe (observer: Observer) {
        const index = this.observers.findIndex(obs =>{
            return obs === observer
        })

        this.observers.splice(index,1);

    }


    notify(data:any){
        this.observers.forEach(observer => observer.update(data))

    }

}


class PriceDisplay implements Observer {
    private el:any

    constructor(){
        this.el = document.querySelector("#price")
    }

  
    
    update(data:any){
    this.el.innertext =  data
    }
    
}

const value = new BitCoinPrice();
const display = new PriceDisplay();

setTimeout(()=>value.unsubscribe(display), 5000 

)

value.subscribe(display);
value.unsubscribe(display);
    


