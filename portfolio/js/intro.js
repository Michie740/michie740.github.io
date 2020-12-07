//ottomated github
let header = document.querySelector('#intro h2');
let anim = [
    { t: "_", ms: 200 },
    { t: "H", ms: 200 },
    { t: "H_", ms: 200 },
    { t: "Hi", ms: 200 },
    { t: "Hi ", ms: 100 },
    { t: "Hi _", ms: 100 },
    { t: "Hi I", ms: 100 },
    { t: "Hi I_", ms: 100 },
    { t: "Hi I'", ms: 100 },
    { t: "Hi I'_", ms: 100 },
    { t: "Hi I'm", ms: 100 },
    { t: "Hi I'm_", ms: 100 },
    { t: "Hi I'm _", ms: 100 },
    { t: "Hi I'm M", ms: 100 },
    { t: "Hi I'm M_", ms: 100 },
    { t: "Hi I'm Mi", ms: 100 },
    { t: "Hi I'm Mi_", ms: 100 },
    { t: "Hi I'm Mic", ms: 100 },
    { t: "Hi I'm Mic_", ms: 100 },
    { t: "Hi I'm Mich", ms: 100 },
    { t: "Hi I'm Mich_", ms: 100 },
    { t: "Hi I'm Miche", ms: 100 },
    { t: "Hi I'm Miche_", ms: 100 },
    { t: "Hi I'm Michel", ms: 100 },
    { t: "Hi I'm Michel_", ms: 200 },
    { t: "Hi I'm Michell", ms: 200 },
    { t: "Hi I'm Michell_", ms: 200 },
    { t: "Hi I'm Michelle", ms: 200 },
    { t: "Hi I'm Michelle_", ms: 200 },
    { t: "Hi I'm Michelle!", ms: 200 },
];

let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        // header.classList.add('top');
        // setTimeout(() => {
        //     document.getElementById('main').style.opacity = 1;
        // }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();