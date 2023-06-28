const genMotivate = () => {
    let x = Math.floor(Math.random() * 5);
    document.getElementById("result").style.backgroundColor = "white";
    let str = "";
    switch (x) {
        case 0:
            str = "Don't give up!"
            break;
        case 1:
            str = "Learning is supposed to be stressful, but that's how the brain gets stronger, just like our muscles"
            break;
        case 2:
            str = "It's okay to break apart, because you'll know to how build yourself better and stronger next time."
            break;
        case 3:
            str = "Get up, a man doesn't stare at the ground, but instead, of what's ahead."
            break;
        case 4:
            str = "No matter the obsticle, destroy, them, all."
            break;      
    }
    document.getElementById("result").innerHTML = str;
}

const genFunny = () => {
    let x = Math.floor(Math.random() * 5);
    document.getElementById("result").style.backgroundColor = "white";
    let str = "";
    switch (x) {
        case 0:
            str = "Fat                   Cat"
            break;
        case 1:
            str = "Just laugh"
            break;
        case 2:
            str = "What do Asians say when you get a B in Math? Nothing, they just disown you... -Jason Lin"
            break;
        case 3:
            str = "Feeling heartbroken from being dumpped? That's okay, 9 cats are better than that person"
            break;
        case 4:
            str = "One day, I will run a 5 minute mile"
            break;      
    }
    document.getElementById("result").innerHTML = str;
}