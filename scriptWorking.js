let text = document.getElementById("text")
let history = document.getElementById("history")
let prompt = document.getElementById("prompt")
let prefix = document.getElementById("prefix")

function updateConsole(newPrompt, addInput, addArrow) {
    // Create p for previous prompt
    const previousPrompt = document.createElement("p");
    previousPrompt.innerHTML = prompt.innerHTML;
    
    // Add previous prompt to history
    history.appendChild(previousPrompt);

    if(addInput === 1) {
        // Create p for input
        const previousInput = document.createElement("p");
        previousInput.innerHTML = text.value;
    
        // Add previous prompt to history
        history.appendChild(previousInput);

        // Create p for >>
        const pre = document.createElement("p");
        pre.innerHTML = ">>"
    
        // Add previous prompt to history
        prefix.appendChild(pre);
    }

    if(addArrow === 1) {
        // Create p for >>
        const pre = document.createElement("p");
        pre.innerHTML = ">>"
    
        // Add previous prompt to history
        prefix.appendChild(pre);
    } else{
        // Create p for spaces
        const pre = document.createElement("p");
        pre.innerHTML = "&nbsp;"
    
        // Add previous prompt to history
        prefix.appendChild(pre);
    }

    // reset animation
    reset_animation(prompt)
    
    // Update Prompt
    prompt.innerHTML = newPrompt
    
    // reset input
    text.value = ""
    let myConsole = document.getElementById("console")
    myConsole.scrollTop = myConsole.scrollHeight;
}

setTimeout(updateConsole, 2500, "I have many, but you have none.", 0, 0)
setTimeout(updateConsole, 5000, "You can find them everywhere, but you can't get one.", 0, 0)


let unlockCount = 0

let checkUnlock = function () {
    if(unlockCount === 0 && text.value === "women") {
        updateConsole("That's right, Batman.", 1, 1)
        unlockCount++
        setTimeout(updateConsole, 2500, "You are almost as smart as Joe.", 0, 0)
    } 
    
    else if(unlockCount === 1 && text.value === "whos joe") {
        updateConsole("JOE MAMA!!!", 1, 1)
        unlockCount++
        setTimeout(updateConsole, 2500, "HAHAHAHAHAHAHAHAH!!!", 0, 0)
        setTimeout(updateConsole, 5000, "YOU FELL FOR IT!!!", 0, 0)
        setTimeout(updateConsole, 7500, "Ahem... um... anyway...", 0, 0)
        setTimeout(updateConsole, 10000, "Who's that Pokemon?", 0, 0)
    }

    else if(unlockCount === 2 && text.value === "pikachu") {
        updateConsole("Well done.", 1, 1)
        unlockCount++
    }
    
    else {
        text.value = ""
    }
}

function reset_animation(el) {
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}
