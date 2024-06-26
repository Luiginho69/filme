/* GERAL */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', Arial, Helvetica, sans-serif;
}

body {
  background-color: #ffffff;
  color: #ffffff;
}

a {
  color: #ffffff;
  text-decoration: none;
  transition: 0.5s;
}

a:hover {
  color: #00c9c8;
}

textarea:focus,
input:focus,
select:focus,
button:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.container {
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  position: relative;
  height: 100vh;
}

header,
main,
footer {
  display: flex;
  align-items: center;
  justify-content: center;
}

header,
footer {
  width: 100%;
  height: 100px;
  padding: 30px 0;
  background-color: #2a272a;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
  margin-top: 20px;
  margin-bottom: 140px;
}

footer {
  grid-area: footer;
  position: absolute;
  bottom: 0;
}

.hide {
  display: none !important;
}

/* SCORE CONTAINER */
#quizz-container,
#score-container {
  color: #222222;
  text-align: center;
  padding: 25px;
  border: 1px solid #e0e0e0;
  box-shadow: 7px 10px 0px rgba(0, 0, 0, 0.1);
}

#quizz-container,
#score-container {
  width: 500px;
  max-width: 90%;
}

#score-container p {
  margin: 20px 0;
}

#score-container #display-score {
  font-size: 32px;
  font-weight: bold;
}

#correct-answers {
  font-weight: bold;
  color: #2eb94c;
}

#questions-qty {
  font-weight: bold;
  color: #00c9c8;
}

#restart {
  background-color: #00c9c8;
  color: #fff;
  font-weight: bold;
  height: 50px;
  border: 1px solid #e0e0e0;
  width: 180px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.5s;
}

#restart:hover {
  background-color: #2a272a;
  color: #ffffff;
}

/* Quizz container */
#question {
  text-align: center;
  margin-bottom: 25px;
  font-size: 20px;
  color: #222222;
  font-weight: bold;
}

#answers-box button {
  display: flex;
  align-items: stretch;
  margin: 15px 0;
  width: 100%;
  border: none;
  text-align: left;
  color: #222222;
  cursor: pointer;
  transition: 0.5s;
}

#answers-box button:hover {
  background-color: #2a272a;
  color: #fff;
}

#answers-box .btn-letter {
  font-size: 30px;
  font-weight: bold;
  background-color: #2a272a;
  border: none;
  color: #fff;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;
  padding: 5px;
  max-width: 45px;
}

.question-answer {
  flex: 1 1 0;
  display: flex;
  padding: 10px 0;
  align-items: center;
  margin-left: 10px;
  font-size: 16px;
}

#quizz-container .wrong-answer,
#quizz-container .wrong-answer .btn-letter {
  background-color: #e62210;
  color: #fff;
  border: none;
}

#quizz-container .correct-answer,
#quizz-container .correct-answer .btn-letter {
  background-color: #2eb94c;
  color: #fff;
  border: none;
}

/* RESPONSIVO */
@media (max-width: 450px) {
  #quizz-container,
  #score-container {
    border: none;
    width: 100%;
    box-shadow: none;
  }
}
