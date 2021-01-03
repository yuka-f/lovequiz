const quiz = [
  {
    question: '倦怠期を打破する最善策はどれでしょう？',
    answers: [
      '普段やらない新鮮で活動的なデートをする',
      '愛を営む際にコスプレをたまにする',
      '月に一度一緒に恋愛映画を観る',
      '一緒にいろんなことを体験する',
    ],
    correct: '普段やらない新鮮で活動的なデートをする'
  },{
    question: '恋人がクイズに間違えた時中のいいカップルはお互いにどう思うでしょう？',
    answers: [
      '『ばかw』などからかいたくなる',
      '『可愛い．．』など愛しく思う',
      '『ああ間違いちゃった。』など一緒に残念がる',
      '『ばかじゃん』と馬鹿にする',
    ],
    correct: '『ああ間違いちゃった。』など一緒に残念がる'
  },{
    question: '結婚後のお金の管理で守ったほうがいいルールはどれでしょう？',
    answers: [
      'お金の管理をお互いに役割分担して一緒に管理する',
      'お互いの財布を別々に作る',
      'お小遣い制にする',
      '二人の共同の財布を作る',
    ],
    correct: 'お金の管理をお互いに役割分担して一緒に管理する'
  },{
    question: 'お互い傷つけない話し方はどれでしょう？',
    answers: [
      '『どうして怒ったのか話してくれる？』などと恋人が感じたことを聞いてあげる',
      '『ウンウン』と頻繁に相槌をうつ',
      '『今そんなに怒っているんだね』と相手の感情を察して話す',
      '自分の感情をあまり共有せずに会話をする',
    ],
    correct: '『どうして怒ったのか話してくれる？』などと恋人が感じたことを聞いてあげる'
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
