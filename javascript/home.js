//#region Animation----------------------------------------------------------------------------------
document.body.style.overflow = 'hidden';
let timeline= gsap.timeline();

timeline.from("section #bg",
{
    opacity:0,
    duration:.6,
    ease: "easeInOut",
},
".3"
);
timeline.from("section #heading",{
    width:70,
    duration:1,

},
".6"
);

timeline.from("header",
{
   top:`${document.querySelector('header').offsetHeight / 2 -200}px`,
   duration:1,
   ease: "bounce.out",


},
".7"
);

timeline.from("section #section",
    {
        top:`${document.querySelector('h1').offsetHeight / 2 -200}px`,
        opacity:0,
        duration:1,
         ease: "back.out(1.7)",
    },
    ".2"
 );

 timeline.from("section .bank",
    {
        y: window.innerHeight - document.getElementById('bank').getBoundingClientRect().top,
       duration:1,
       ease: "slow(0.7, 0.7)", 
    },
    ".8"
 );
// #endregion

// #region working-------------------------------------------------------------------------------
const urlParams = new URLSearchParams(window.location.search);
const acno = urlParams.get('acno');
const ud = JSON.parse(localStorage.getItem(acno))
const unm = ud.usernm
const nm = document.getElementById('heading')
nm.innerHTML = `Welcome <span id="un"> &nbsp;${unm}</span>`

function BalanceDisplay(balance, elementId,duration) {
    const disp = document.getElementById(elementId);
    disp.innerHTML = `Your current balance is: <span>${balance}</span>`;
    
    setTimeout(() => {
        disp.innerHTML = ''; // Clear the content after the duration
    },  duration * 1000); // Convert seconds to milliseconds
}

function deposit() {
    if (damt.value > 0 && damt.value) {
        if (dpswd.value === ud.paswd) {
            ud.balance += parseInt(damt.value)
            localStorage.setItem(acno, JSON.stringify(ud))
            alert(`${damt.value} has been added to your account`)
            damt.value=""
            dpswd.value=""
            BalanceDisplay(ud.balance, 'dbal',5);
        }
        else {
            alert('Incorrect Password')
        }
    }
    else {
        alert('Enter a valid amount')
    }
}

function withdraw() {


    if (wamt.value > 0 && wamt.value) {
        if (wpswd.value === ud.paswd) {
            if (ud.balance>=wamt.value) {
                ud.balance -= parseInt(wamt.value)
                localStorage.setItem(acno, JSON.stringify(ud))
                alert(`${wamt.value} has been withdrawed from your account`)
                wamt.value=""
                wpswd.value=""
                BalanceDisplay(ud.balance, 'wbal',5);
            }
            else{
                alert('Insufficient Balance')
            }
        }
        else {
            alert('Incorrect Password')
        }
    }
    else {
        alert('Enter a valid amount')
    }
}

