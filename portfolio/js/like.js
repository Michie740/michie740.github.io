//ottomated github
let header = document.querySelector('#michelle');
let anim = [
    { t: "_", ms: 200 },
    { t: "I", ms: 200 },
    { t: "I_", ms: 200 },
    { t: "I ", ms: 200 },
    { t: "I _", ms: 100 },
    { t: "I l", ms: 100 },
    { t: "I l_", ms: 100 },
    { t: "I li", ms: 100 },
    { t: "I li_", ms: 100 },
    { t: "I lik", ms: 100 },
    { t: "I lik_", ms: 100 },
    { t: "I like", ms: 100 },
    { t: "I like_", ms: 100 },
    { t: "I like ", ms: 100 },
    { t: "I like _", ms: 200 },
    { t: "I like t", ms: 200 },
    { t: "I like t_", ms: 200 },
    { t: "I like to_", ms: 200 },
    { t: "I like to:", ms: 200 },
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
        window.localStorage.stepDenominator = 2;
    }
}
update();