const quiz = [
  {
    question: '私がエンジニアになりたい理由はどれでしょう？',
    answers: [
      '給料がいいから',
      'スキルを身につけて将来フリーランスになりたいから',
      '好奇心と発想力を活かしたいから',
      '父に言われたから',
    ],
    correct: '好奇心と発想力を活かしたいから'
  },{
    question: '私の前職の職種は何でしょう？',
    answers: [
      'エステティック部員',
      '美容師',
      'アパレル店員',
      '留学していた',
    ],
    correct: 'エステティック部員'
  },{
    question: '私が最も転職の軸にしていることは何でしょう？',
    answers: [
      '休日やお給料、残業手当',
      'スキルアップできる環境勉強会などがあるかどうか',
      'お昼寝ができるかどうか',
      '考え方',
    ],
    correct: '考え方'
  },{
    question: '私が周りから二番目に言われることは何でしょう？',
    answers: [
      '発想が斬新',
      '危なっかしい',
      '周りの状況をよくみてる',
      'レアもん',
    ],
    correct: '危なっかしい'
  }
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義(まとまりごとに関数に入れるとみやすくなる)
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('当たり！');
    score++;
  } else {
    window.alert('残念！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  }else {
    window.alert('おしまいです！といてくれてありがとう！あなたの正解数は' + score + '/' + quizLength + 'です！')
  }
};



// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
