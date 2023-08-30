const inputSlider = document.querySelector("input");
const resetButton=document.querySelector("#reset");
var inputValue = 0;
var randomNumber = Math.floor(Math.random() * 10);
var attempts = 1;
var flag = false;
console.log(randomNumber);
inputSlider.oninput = () => {
  inputValue = inputSlider.value;

  let guessNumber = document.getElementsByTagName("button");
  let attempt = document.getElementById("attempts");
  let resultDescription = document.getElementById("result_description");
  console.log(inputValue);

  if (attempts <= 6 && !flag) {
    attempt.innerHTML = "Attempts: " + attempts;
    if (guessNumber[inputValue - 1].innerText < randomNumber) {
      guessNumber[inputValue - 1].classList.remove("btn-primary");
      guessNumber[inputValue - 1].classList.add("btn-warning");
    } else if (guessNumber[inputValue - 1].innerText == randomNumber) {
      guessNumber[inputValue - 1].classList.remove("btn-primary");
      guessNumber[inputValue - 1].classList.add("btn-success");
      resultDescription.innerHTML =
        "Congratulations! You guess number in " + attempts + " attempts";
      resultDescription.style.color = "green";
      flag = true;
      return;
    } else {
      guessNumber[inputValue - 1].classList.remove("btn-primary");
      guessNumber[inputValue - 1].classList.add("btn-danger");
    }
  } else if (attempts > 6 && !flag) {
    resultDescription.innerHTML = "Try Again! You lost all attempts";
    resultDescription.style.color = "red";
  }
  attempts++;
};
resetButton.addEventListener('click',()=>{
  window.location.reload();
})
