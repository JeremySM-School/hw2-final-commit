

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");


btn1.addEventListener("click", clicked);
btn1.addEventListener("click", addBoardersDish1);

btn2.addEventListener("click", clicked);
btn2.addEventListener("click", addBoardersDish2);

btn3.addEventListener("click", clicked);
btn3.addEventListener("click", addBoardersDish3);


function clicked() {
    console.log("clicked");
}

function addBoardersDish1() {
  const dish = document.getElementById("dish1");
  const display = document.getElementById("fav1");

  if (dish.style.border === "5px solid red") {
      dish.style.border = "none";
      display.textContent = "None"; 
      btn1.textContent = "Favorite";
  } else {
      dish.style.border = "5px solid red";
      display.textContent = "Bacon, egg, and cheese biscuits - $3.99"; 
        btn1.textContent = "Unfavorite";
  }
}

function addBoardersDish2() {
  const dish = document.getElementById("dish2");
  const display = document.getElementById("fav2");

  if (dish.style.border === "5px solid red") {
      dish.style.border = "none";
      display.textContent = "None"; 
        btn2.textContent = "Favorite";
  } else {
      dish.style.border = "5px solid red";
      display.textContent = "Bo-rounds - $2.99"; 
        btn2.textContent = "Unfavorite";
  }
}

function addBoardersDish3() {
  const dish = document.getElementById("dish3");
  const display = document.getElementById("fav3");

  if (dish.style.border === "5px solid red") {
      dish.style.border = "none";
      display.textContent = "None"; 
        btn3.textContent = "Favorite";
  } else {
      dish.style.border = "5px solid red";
      display.textContent = "Chicken Tenders/Wings - $6.99"; 
        btn3.textContent = "Unfavorite";
  }
}