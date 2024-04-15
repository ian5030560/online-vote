type Standard = keyof HTMLElementTagNameMap;

export interface ElementPayload {
    className?: string;
    id?: string;
    attributes?: { [key: string]: string },
    style?: Partial<CSSStyleDeclaration>,
}
type Tag = Standard | string;
export default function create<T extends Standard>(tag: T, payload?: ElementPayload): HTMLElementTagNameMap[T];
export default function create(tag: string, payload?: ElementPayload): HTMLElement;
export default function create(tag: Tag, payload?: ElementPayload) {
    let element = document.createElement(tag);

    if (!payload) return element;
    let { className, id, attributes, style } = payload;

    if (className) element.className = className;
    if (id) element.id = id;
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    if (style) Object.assign(element.style, style);

    return element;
}

export function createNS<K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K, payload?: ElementPayload): SVGElementTagNameMap[K];
export function createNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string, payload?: ElementPayload): SVGElement;
export function createNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: K, payload?: ElementPayload): MathMLElementTagNameMap[K];
export function createNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string, payload?: ElementPayload): MathMLElement;
export function createNS(namespaceURI: string | null, qualifiedName: string, payload?: ElementPayload) {
    let element = document.createElementNS(namespaceURI, qualifiedName);
    if (!payload) return element;
    let { className, id, attributes, style } = payload;

    if (className) element.setAttribute("class", className);
    if (id) element.setAttribute("id", id);
    if (attributes) {
        for (let key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }
    if (element instanceof HTMLElement && style) Object.assign(element.style, style);
    return element;
}

export const createDF = document.createDocumentFragment;

export function add<P extends Node, C extends Node | Node[]>(p: P, c: C): P{
    if(c instanceof Node){
        p.appendChild(c);
    }
    else{
        (c as Node[]).forEach(child => p.appendChild(child));
    }

    return p;
}

export function radioListener(name: string, target: string[], callback: (e: Event) => void){
    let items = document.getElementsByName(name);
    items.forEach(item => {
        item.addEventListener("change", (e: Event) => {
            let value = (e.target as HTMLInputElement).value;
            if(target.includes(value)){
                callback(e);
            }
        })
    })
}
