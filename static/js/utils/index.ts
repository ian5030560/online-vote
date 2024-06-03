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