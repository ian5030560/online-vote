import Choice from "./choiceItem";

let ticket = document.getElementsByName("ticket");
let ticketNumberContainer = document.getElementById("ticket-number-container");
let multiple = document.getElementById("multiple") as HTMLInputElement;
let choiceContainer = document.getElementById("choice-container");
let choiceAdd = document.getElementById("choice-add");


window.onload = () => {
    ticket.forEach(t => {
        t.addEventListener("change", (e) => {
            let target = (e.target) as HTMLInputElement;

            if (target.value === multiple.value) {
                ticketNumberContainer?.classList.remove("invisible");
            }
            else {
                ticketNumberContainer?.classList.add("invisible");
            }
        })
    })

    choiceAdd?.addEventListener("click", () => {
        choiceContainer?.appendChild(Choice({ container: choiceContainer }));
    })
}
