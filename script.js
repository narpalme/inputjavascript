var totalEle = document.body.querySelector(".total");
var taxedEle = document.body.querySelector(".taxed");
var tippedEle = document.body.querySelector(".tipped");
var math
var firstPrompt = Number(prompt("What is the bill total?"));
var total = firstPrompt
var tax = firstPrompt*0.07;
var taxed = tax+firstPrompt
var tip = taxed*0.05
var tipped = taxed+tip
totalEle.innerHTML = "The original total is $"+firstPrompt
taxedEle.innerHTML= "The taxed bill is $"+taxed
tippedEle.innerHTML = "The taxed bill including the tip is $"+tipped;