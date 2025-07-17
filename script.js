const questions = {
  F1: [
    { q: "Who was the first driver to win a Formula One World Championship for Ferrari?", options: ["Juan Manuel Fangio", "Alberto Ascari", "Niki Lauda", "Phil Hill"], a: 1 },
    { q: "Which team did Lewis Hamilton race for before joining Mercedes in 2013?", options: ["Williams", "Red Bull", "McLaren", "Renault"], a: 2 },
    { q: "What is the only country to have hosted a Grand Prix on a street circuit, a permanent circuit, and a hybrid (semi-street) circuit?", options: ["Germany", "USA", "Australia", "Spain"], a: 1 },
    { q: "What does the 'DRS' system do in Formula One cars?", options: ["Increases engine power", "Reduces weight", "Increases cornering grip", "Reduces aerodynamic drag"], a: 3 },
    { q: "Which circuit has the most corners on the F1 calendar as of 2025?", options: ["Suzuka", "Jeddah Street Circuit", "Singapore (Marina Bay)", "Las Vegas Street Circuit"], a: 1 },
    { q: "Who holds the record for the most Formula One World Championships as of 2025?", options: ["Sebastian Vettel", "Lewis Hamilton", "Michael Schumacher", "Max Verstappen"], a: 1 },
    { q: "What is the name of the safety car used in most Formula One races?", options: ["Lamborghini Huracán", "BMW M5", "Mercedes-AMG GT Black Series", "Aston Martin Vantage"], a: 2 },
    { q: "Which Grand Prix is famously held at night under artificial lights?", options: ["Italian Grand Prix", "Abu Dhabi Grand Prix", "Canadian Grand Prix", "Belgian Grand Prix"], a: 1 },
    { q: "Who was the youngest F1 World Champion ever (as of 2025)?", options: ["Lewis Hamilton", "Fernando Alonso", "Max Verstappen", "Sebastian Vettel"], a: 3 },
    { q: "What color flag signals the end of a Formula One race?", options: ["Red", "Blue", "Yellow", "Chequered (Black and White)"], a: 3 },
    { q: "Which team uses a prancing horse as their logo?", options: ["Ferrari", "AlphaTauri", "Haas", "Alpine"], a: 0 },
    { q: "In Formula One, what does a blue flag indicate?", options: ["Race is over", "Driver must pit", "Slower driver must let faster car pass", "Rain on the track"], a: 2 },
    { q: "Which Formula One team is based in Milton Keynes, UK?", options: ["Red Bull Racing", "McLaren", "Aston Martin", "Williams"], a: 0 },
    { q: "What kind of tyres are used during rain conditions?", options: ["Supersoft", "Medium", "Intermediates or Wet tyres", "Hard"], a: 2 },
    { q: "Who is the team principal of Scuderia Ferrari as of 2025?", options: ["Toto Wolff", "Christian Horner", "Frédéric Vasseur", "Mattia Binotto"], a: 2 }
  ],
Cricket: [
  { q: "Who is the only batsman to score 400 runs in a single Test innings?", options: ["Brian Lara", "Virat Kohli", "Matthew Hayden", "Don Bradman"], a: 0 },
  { q: "Which country won the inaugural ICC T20 World Cup in 2007?", options: ["Australia", "Pakistan", "India", "South Africa"], a: 2 },
  { q: "What is the maximum number of overs a bowler can bowl in a standard ODI match?", options: ["15", "12", "10", "20"], a: 2 },
  { q: "Which Indian bowler took a hat-trick in his very first over in a World Cup match?", options: ["Zaheer Khan", "Mohammed Shami", "Chetan Sharma", "Kuldeep Yadav"], a: 2 },
  { q: "Who holds the record for the fastest century in One Day Internationals?", options: ["AB de Villiers", "Shahid Afridi", "Corey Anderson", "Virat Kohli"], a: 0 },
  { q: "Who was the first player to win the Orange Cap twice in IPL history?", options: ["David Warner", "Chris Gayle", "Virat Kohli", "KL Rahul"], a: 0 },
  { q: "Which bowler has the best bowling figures in a single IPL match (as of 2025)?", options: ["Alzarri Joseph", "Sohail Tanvir", "Anil Kumble", "Adam Zampa"], a: 0 },
  { q: "Who was the first uncapped player to win the MVP (Most Valuable Player) award in the IPL?", options: ["Rahul Tewatia", "Varun Chakravarthy", "Harshal Patel", "Paul Valthaty"], a: 3 },
  { q: "Which team chased the highest total in IPL history successfully (as of 2025)?", options: ["Rajasthan Royals", "Punjab Kings", "Delhi Capitals", "Mumbai Indians"], a: 0 },
  { q: "Which player has captained the most number of IPL matches?", options: ["MS Dhoni", "Rohit Sharma", "Virat Kohli", "Gautam Gambhir"], a: 0 },
  { q: "Who was the first player to score a century in an IPL final?", options: ["Shane Watson", "Murali Vijay", "Wriddhiman Saha", "Manish Pandey"], a: 2 },
  { q: "Which IPL franchise was terminated and later reinstated into the league?", options: ["Sunrisers Hyderabad", "Chennai Super Kings", "Rajasthan Royals", "Both B and C"], a: 3 },
  { q: "Who is the only bowler to take two 10-wicket hauls in a Test match?", options: ["Jim Laker", "Anil Kumble", "Muttiah Muralitharan", "Shane Warne"], a: 0 },
  { q: "Which player has scored a double century in ODI cricket more than once?", options: ["Rohit Sharma", "Sachin Tendulkar", "Martin Guptill", "Virender Sehwag"], a: 0 },
  { q: "Who holds the record for the highest partnership in Test cricket?", options: ["Jayawardene & Sangakkara", "Laxman & Dravid", "Hayden & Langer", "Root & Stokes"], a: 0 },
  { q: "Who was the first bowler to take 500 wickets in Test cricket?", options: ["Muttiah Muralitharan", "Courtney Walsh", "Shane Warne", "Glenn McGrath"], a: 1 },
  { q: "What is the highest team total in a single ODI match (as of 2025)?", options: ["481/6", "498/4", "434/4", "438/9"], a: 1 },
  { q: "Which country has won the most ICC Champions Trophy titles?", options: ["India", "Australia", "South Africa", "Sri Lanka"], a: 0 },
  { q: "Who was the first cricketer to score 100 international centuries?", options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Kumar Sangakkara"], a: 2 },
  { q: "Which wicketkeeper holds the record for the most dismissals in Test cricket?", options: ["MS Dhoni", "Adam Gilchrist", "Mark Boucher", "Ian Healy"], a: 2 }
],
  Robotics: [
    { q: "What is the name of the sensor most commonly used in robots to measure distance using sound?", options: ["LIDAR", "Ultrasonic sensor", "Infrared sensor", "Gyroscope"], a: 1 },
    { q: "In robotics, what does the term ‘degree of freedom’ refer to?", options: ["Number of commands", "Movements", "Sensors", "Robots"], a: 1 },
    { q: "Which programming language is most widely used with ROS?", options: ["Java", "Python", "C++", "Both B and C"], a: 3 },
    { q: "What kind of joint is commonly used in robotic arms like a shoulder?", options: ["Prismatic", "Revolute", "Ball-and-socket", "Cylindrical"], a: 1 },
    { q: "ASIMO is a humanoid robot developed by which company?", options: ["Sony", "Honda", "Toyota", "Boston Dynamics"], a: 1 }
  ]
};

let currentCategory = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;

function startQuiz(category) {
  currentCategory = category;
  currentQuestions = questions[category].sort(() => 0.5 - Math.random()).slice(0, 5);
  score = 0;
  currentIndex = 0;
  document.getElementById('home').style.display = 'none';
  document.getElementById('quiz-container').innerHTML = `
    <div class="score-circle" id="score-circle">0/5</div>
    <div id="quiz"></div>
  `;
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentIndex];
  let html = `<div class="question"><h2>Q${currentIndex + 1}: ${q.q}</h2><div class="options">`;
  q.options.forEach((opt, i) => {
    html += `<div class="option" onclick="selectAnswer(${i})">${String.fromCharCode(65 + i)}) ${opt}</div>`;
  });
  html += `</div></div>`;
  document.getElementById('quiz').innerHTML = html;
}

function selectAnswer(i) {
  const q = currentQuestions[currentIndex];
  const options = document.querySelectorAll('.option');
  options.forEach(opt => opt.style.pointerEvents = 'none');
  if (i === q.a) {
    options[i].classList.add('correct');
    score++;
    document.getElementById('score-circle').textContent = `${score}/5`;
  } else {
    options[i].classList.add('wrong');
    options[q.a].classList.add('correct');
  }
  setTimeout(() => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1500);
}

function showResult() {
  let msg = "";
  let funnyEmoji = "";

  switch (score) {
    case 5:
      msg = "Slayed it! You’re a certified baddie 🏁🔥";
      funnyEmoji = "🚀🏆🎉";
      break;
    case 4:
      msg = "Almost a legend! One more lap to glory! 🏎️💨";
      funnyEmoji = "🥈😎";
      break;
    case 3:
      msg = "You did pretty well! Podium spot’s calling! 🎖️😄";
      funnyEmoji = "👍🔥";
      break;
    case 2:
      msg = "Halfway there! Keep your engines revving! ⛽️😉";
      funnyEmoji = "⚡️⏳";
      break;
    case 1:
      msg = "One spark plug lit up! Time for a pit stop! 🛠️😅";
      funnyEmoji = "😬⛔️";
      break;
    default:
      msg = "Oopsie daisy! Time to hit the books & the gas! 📚🏎️";
      funnyEmoji = "💥🤡";
  }

  document.getElementById('quiz').innerHTML = `
    <div class="result-container">
      <h2>You got ${score}/5 correct! ${funnyEmoji}</h2>
      <div class="result-message">${msg}</div>
      <button onclick="restartQuiz()">Try Again!</button>
    </div>
  `;
}

function restartQuiz() {
  location.reload();
}
