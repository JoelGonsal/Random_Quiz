
let count = 0;
let score = 0;



  const boxes = document.querySelectorAll(".btn");
btn = document.querySelector("#newbtn");
let scoree = document.querySelector("#scoree");

let h2 = document.querySelector("#result");
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

async function getQuestions() {

  const res = await fetch("https://opentdb.com/api.php?amount=50&type=multiple");
  const data = await res.json();
  questions = data.results;
 q = questions[count];
  showQuestion();
    boxes.forEach(box => box.style.display ="block");

    newbtn.style.display ="block";
    

}

function showQuestion() {
h2.innerText="";
  for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.borderColor="";
  }
  
  let options = [...q.incorrect_answers, q.correct_answer];
console.log(q.correct_answer);
  options.sort(() => Math.random() - 0.5);




  boxes.forEach((box, i) => {
    box.innerText = options[i];
    box.disabled = false; 
    box.className = "btn"; 


  });

  document.getElementById("question").innerText = decodeHTML(q.question);
}

btn.addEventListener("click", () => {
  count = (count + 1) % questions.length; 
   q = questions[count];
  showQuestion();



});


boxes.forEach((box) => {

    box.addEventListener("click",() =>{
       
      let ans = box.innerText;
      console.log(ans);
      console.log(q.correct_answer);
           boxes.forEach(b =>
          b.disabled = true);

      if(ans==q.correct_answer)
      {
        h2.innerText = "CORRECT";
box.style.borderColor="rgb(92, 255, 92)";
scoree.innerHTML = `Score : ${++score}`;
      }
      else{
  h2.innerText = "INCORRECT";

   box.style.borderColor="red";
      boxes.forEach((box)=>{
        if(box.innerText===q.correct_answer){
       box.style.borderColor="rgb(92, 255, 92)";
      }
    });
    }

setTimeout(() => {
  count = (count + 1) % questions.length;
  q = questions[count];
  showQuestion();
}, 3000);
  

      

  
       
    });

});
//



getQuestions();
