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