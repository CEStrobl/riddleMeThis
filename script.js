let text = document.getElementById("text")
let history = document.getElementById("history")
let prompt = document.getElementById("prompt")
let prefix = document.getElementById("prefix")


let r1 = {
    promptCount: 3,
    promptA: "Riddle me this,",
    promptB: "I have many, but you have none.",
    promptC: "You can find them everywhere, but you can't get one.",

    answers: ["women", "maidens",],

    responseCount: 1,
    responseA: "That's right.",
}

let r2 = {
    promptCount: 1,
    promptA: "You are almost as smart as Joe.",

    answers: ["whos joe", "who's joe", "who's joe?",],

    responseCount: 4,
    responseA: "JOE MAMA!!!",
    responseB: "HAHAHAHAHAHAHA!!!",
    responseC: "YOU FELL FOR IT!!!",
    responseD: "Ahem... Uh, anyway...",
}

let r3 = {
    promptCount: 1,
    promptA: "Who's that pokemon?",
    answers: ["pikachu",],

    responseCount: 1,
    responseA: "Well done.",
}

let riddles = [
    r1, r2, r3
]

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
    let current = riddles[unlockCount]

    // loop over the answers to check if the response is one of multiple
    for (let i = 0; i < current.answers.length; i++) {
        // if the input matches one of the answers...
        if(text.value === current.answers[i]) {
            // check how many responses to give

            let wait = 2500

            if(current.responseCount === 1){
                updateConsole(current.responseA, 1, 1)
                unlockCount++
            } 
            else if(current.responseCount === 2){
                updateConsole(current.responseA, 1, 1)
                setTimeout(updateConsole, wait, current.responseB, 0, 0)
                unlockCount++
            } 
            else if(current.responseCount === 3){
                updateConsole(current.responseA, 1, 1)
                setTimeout(updateConsole, wait, current.responseB, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.responseC, 0, 0)
                unlockCount++
            } 
            else if(current.responseCount === 4){
                updateConsole(current.responseA, 1, 1)
                setTimeout(updateConsole, wait, current.responseB, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.responseC, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.responseD, 0, 0)
                unlockCount++
            }
            current = riddles[unlockCount]

            if(current.promptCount === 1){
                updateConsole(current.promptA, 0, 1)
            } 
            else if(current.promptCount === 2){
                updateConsole(current.promptA, 0, 1)
                setTimeout(updateConsole, wait, current.promptB, 0, 0)
            } 
            else if(current.promptCount === 3){
                updateConsole(current.promptA, 0, 1)
                setTimeout(updateConsole, wait, current.promptB, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.promptC, 0, 0)
            } 
            else if(current.promptCount === 4){
                updateConsole(current.promptA, 0, 1)
                setTimeout(updateConsole, wait, current.promptB, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.promptC, 0, 0)
                setTimeout(updateConsole, wait+=2500, current.promptD, 0, 0)
            }
        } 
        else {
            text.value = ""
        }

    }
}

function reset_animation(el) {
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}
