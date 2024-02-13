const targetParent = document.querySelectorAll('.target')[0];
const targetPara = document.querySelector('p');


targetPara.addEventListener( 'click', (e)=>{
    e.preventDefault();
    e.stopPropagation();

    askforInput();
}, false )

const askforInput = () => {
    document.body.style.opacity = "100%";
    targetParent.classList.remove("border");
    targetPara.innerHTML = '<input type="text" name="askingNameOfUser" id="inputField">';

    const inputField = document.querySelector('#inputField');
    inputField.classList.add('inputNameArea');

    inputField.addEventListener( 'click', (e)=>{
        e.preventDefault();
        e.stopPropagation();

        giveInputAndSubmit();
    }, false )
}

const giveInputAndSubmit = () => {
   const submitBTN = document.createElement('button');
   submitBTN.innerHTML = 'submit';
   submitBTN.classList.add('submitBTNstyle');
   targetPara.appendChild(submitBTN);

   submitBTN.addEventListener( 'click', (e)=>{
    e.preventDefault();
    e.stopPropagation();

    analyzeInputAndGiveOutput();
   }, false )
}

const analyzeInputAndGiveOutput = () => {
    if(inputField.value === undefined || 
        inputField.value === null || 
        inputField.value.length <= 2){
        alert(`${inputField.value} is not a valid name, Please enter a valid name!`); 
        tryAgain();
    } else {
        targetPara.innerHTML = `Welcome ${inputField.value}`;
        
        const playAgainBtn = document.createElement('button');
        playAgainBtn.innerHTML = 'Play Again';
        playAgainBtn.classList.add("playAgainBtnStyle");
        document.body.appendChild(playAgainBtn);
        playAgainBtn.addEventListener( 'click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            document.body.removeChild(playAgainBtn);
            backToHome();
        }, false )
    };
}

const tryAgain = () => {
    inputField.value = '';
    askforInput();
}

const backToHome = () => {
   document.body.style.opacity = "20%";
   targetPara.innerHTML = 'CLick on Me!';
   targetParent.classList.add("border");
}