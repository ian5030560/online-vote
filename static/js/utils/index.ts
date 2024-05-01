type Attribute = {[key: string]: string};
type Listener = {name: keyof HTMLElementEventMap | string, listener: (e: Event) => void, options?: boolean | AddEventListenerOptions};

class Ref<T extends keyof HTMLElementTagNameMap | string>{
    tag: T;
    attribute: Attribute
    listeners: Listener[];
    private uuid: string;

    constructor(tag: T){
        this.tag = tag;
        this.attribute = {};
        this.listeners = [];
        this.uuid = randomId(10);
    }

    on(name: keyof HTMLElementEventMap | string, listener: (e: Event) => void, options?: boolean | AddEventListenerOptions){
        this.listeners.push({
            name: name,
            listener: listener,
            options: options
        })
    }

    off(name: keyof HTMLElementEventMap | string, listener: (e: Event) => void){
        this.listeners.filter(({name: lname, listener: llistener}) => !(name === lname && listener === llistener))
    }

    attr(attrs: Attribute){
        Object.assign(this.attribute, attrs);
    }

    bind(html: string){
        let parser = new DOMParser();
        let element = parser.parseFromString(html, "text/html").body.firstElementChild as HTMLElement;
        if(element.tagName.toLowerCase() !== this.tag) throw new Error("Invalid Tag Name");
        
        Object.assign(element.attributes, this.attribute);
        element.setAttribute("data-ref-uuid", this.uuid);

        return element.outerHTML;
    }

    get instance(): HTMLElement{
        return document.querySelector(`[data-ref-uuid='${this.uuid}']`)!;
    }

    get id(){
        return this.uuid;
    }
}

export function ref(tag: keyof HTMLElementTagNameMap | string){
    return new Ref(tag);
}

export function html<T extends keyof HTMLElementTagNameMap | string>(...refs: Ref<T>[]){
    return (stringArr: TemplateStringsArray, ...placeholders: string[]) => {
        let content = String.raw({raw: stringArr}, ...placeholders);
        let parser = new DOMParser();
        let element = parser.parseFromString(content, "text/html").body;
        
        let root = element.firstElementChild!;
        for(let ref of refs){
            for(let {name, listener, options} of ref.listeners){
                root.querySelector(`[data-ref-uuid='${ref.id}']`)?.addEventListener(name, listener, options);
            }
        }
        return root as HTMLElement;
    }
}

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

export function randomId(count: number): string {

    const options = [
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvw",
        "1234567890"
    ]

    function getRandomChar(option: string) {
        const index = Math.floor(Math.random() * option.length);
        return option.charAt(index);
    }

    let result = "";
    while (count > 0) {
        const randomOption = options[Math.floor(Math.random() * 2)];
        result += getRandomChar(randomOption);
        count--;
    }

    return result;
}