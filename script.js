let btn = document.querySelectorAll(".btn");
let res = document.querySelector(".result");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
console.log(clear);

btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
    res.innerHTML += e.target.id;
    console.log();
  });
});

equal.addEventListener("click", (e) => {
  res.innerHTML = eval(res.innerHTML);
});

clear.addEventListener("click", () => {
  res.innerHTML = "";
});
