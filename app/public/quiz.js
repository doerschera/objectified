
var quiz = [
  {
    question: 'How are you feeling about your day so far?',
    right: 'Awesome. Nothing could ruin my day.',
    left: 'Completely inconsolable.'
  },
  {
    question: 'What would happen if you suddenly have to rearrange your schedule?',
    right: "No worries, totally flexible.",
    left: 'Impossible.'
  },
  {
    question: 'How stressed are you feeling?',
    right: "Don't even talk to me.",
    left: "I'm so relaxed I could be levitating."
  },
  {
    question: 'What are your ambitions for the day?',
    right: "I'm dressed to impress",
    left: 'Get back to bed ASAP'
  },
  {
    question: 'How much of your day revolves around other humans?',
    right: "All  of it. They just won't leave.",
    left: 'Pets are kind of human, right?'
  }
]

$(document).ready(function() {

  var userInput = [];
  var number = 0;
  var selection = 0;

  function getQuestion() {
    $('#question').html(quiz[number].question);
    $('#rightDescription').html(quiz[number].right);
    $('#leftDescription').html(quiz[number].left);
    $('#questionNumber').html((number+1) +' / 5');
    if(number == 4) {
      $('#next').html('Done');
    }
  }

  getQuestion();

  $('#next').on('click', function() {
    number++;
    if(selection != 0) {
      getQuestion();
    }
  })

  $('.radio').on('click', function() {
    $('.inner').show();
    selection = $(this).attr('data-rating');
    userInput[number] = selection;
    $(this).children('.inner').hide();
  })

})
