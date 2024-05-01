import loadSwitch from "./utils/switch";
import { radioListener } from "./utils";
import Option from "./ui/option";

let ticketNumberContainer = document.getElementById("ticket-number-container");
let optionContainer = document.getElementById("option-container");
let optionAdd = document.getElementById("option-add");
let voteForm = document.getElementById("vote-form") as HTMLFormElement;
let optionFrame = optionContainer?.parentElement;

window.onload = () => {
  radioListener("ticket", ["single", "multiple"], (e) => {
    let target = (e.target) as HTMLInputElement;
    let ticketNumber = ticketNumberContainer?.querySelector("[name='ticket-number']");

    if (target.value === "multiple") {
      ticketNumberContainer?.classList.remove("invisible");
    }
    else {
      ticketNumberContainer?.classList.add("invisible");
    }

    if (ticketNumber) {
      (ticketNumber as HTMLInputElement).required = target.value === "multiple";
    }
  }); 

  voteForm?.addEventListener('submit', event => {
    let hasOption = optionContainer?.hasChildNodes();
    if (!(voteForm as HTMLFormElement).checkValidity() || !hasOption) {
      event.preventDefault()
      event.stopPropagation()
      optionFrame?.classList.add("border-danger");
    }
    else {
      
    }
    voteForm.classList.add('was-validated');

  }, false)


  function handleChange(){
    if(voteForm?.classList.contains("was-validated")){
      if(optionContainer?.hasChildNodes()){
        optionFrame?.classList.remove("border-danger");
        optionFrame?.classList.add("border-success");
      }
      else{
        optionFrame?.classList.add("border-danger");
        optionFrame?.classList.remove("border-success");
      }
    }
    let ticketNumber = ticketNumberContainer?.querySelector("[name='ticket-number']") as HTMLInputElement; 
    ticketNumber.max = optionContainer!.childElementCount + "";
  }

  optionAdd?.addEventListener("click", () => {
    optionContainer?.appendChild(Option({
      onRemove: handleChange
    }));

    handleChange();
  });

  loadSwitch();
}
