import 'bootstrap';
import switchTheme from "./ui/switch";

let search = document.getElementById("search") as HTMLInputElement;
let votes = document.querySelectorAll("tr[data-vote-title]");
window.onload = () => {
 
    search?.addEventListener("input", (e) => {
        for(let vote of votes){
            let val = vote.getAttribute("data-vote-title");
            if(val?.includes(search.value)){
                vote.classList.remove("d-none");
                vote.nextElementSibling?.classList.remove("d-none");
            }
            else{
                vote.classList.add("d-none");
                vote.nextElementSibling?.classList.add("d-none");
            }
        }       
    });

    switchTheme();
}