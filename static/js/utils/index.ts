export function radioListener(name: string, target: string[], callback: (e: Event) => void) {
    let items = document.getElementsByName(name);
    items.forEach(item => {
        item.addEventListener("change", (e: Event) => {
            let value = (e.target as HTMLInputElement).value;
            if (target.includes(value)) {
                callback(e);
            }
        })
    })
}

export const uuid = () => window.crypto.randomUUID().toString().replace("/", "");


class State<T>{
    private name: string;
    private static stateMap: Map<string, State<unknown>> = new Map();
    private callMap: Map<string, (element: HTMLElement, prev: T | undefined, next: T) => void> = new Map();
    private val: T | undefined;

    private constructor(name: string){
        this.name = name;
    }

    static getInstance<V>(name: string){
        let ins = this.stateMap.get(name);
        
        return (ins ? ins : (() => {
            let newIns = new State(name);
            this.stateMap.set(name, newIns);
            return newIns;
        })()) as State<V>;
    }

    define(cname: string, callback: (element: HTMLElement, prev: T | undefined, next: T) => void){
        this.callMap.set(cname, callback);
    }

    set value(val: T){
        this.call(val);
    }

    get value(): T | undefined{
        return this.val;
    }

    private call(val: T){
        let element = document.querySelector(`[data-state-name='${this.name}']`) as HTMLElement;
        for(let key of this.callMap.keys()){
            let children = element.querySelectorAll(`[data-state-for='${this.name}:${key}']`) as NodeListOf<HTMLElement>;
            for(let child of children){

                this.callMap.get(key)!(child, this.val, val);
            }
        }
        this.val = val;
    }
}


export function state<T>(name: string){
    return State.getInstance<T>(name);
}