export interface Component{
    render: string;
    dom?: (dom: DocumentFragment) => void;
}

export function html(comp: Component){
    let nodes = new DOMParser().parseFromString(comp.render, "text/html").body.childNodes;
    let df = document.createDocumentFragment();
    df.append(...Array.from(nodes));
    comp.dom?.(df);
    return df;
}