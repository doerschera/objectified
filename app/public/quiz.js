
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

  var userInput = {selections: []};
  var number = 0;
  var selection = 0;
  var currentUrl = window.location.origin;
  var object;

  console.log(object);

  function getQuestion() {
    $('#question').html(quiz[number].question);
    $('#rightDescription').html(quiz[number].right);
    $('#leftDescription').html(quiz[number].left);
    $('#questionNumber').html((number+1) +' / 5');
    if(number == 4) {
      $('#buttonTitle').html('Done');
    }
  }

  getQuestion();

  $('#next').on('click', function() {
    number++;
    $('.inner').show();
    if(number == 5) {
      $.post(currentUrl+'/api/new', userInput)
      .then(function(data) {
        object = data;
        results();
      })
    }
    if(selection != 0) {
      getQuestion();
    }
  })

  $('.radio').on('click', function() {
    $('.inner').show();
    selection = $(this).attr('data-rating');
    userInput.selections[number] = selection;
    $(this).children('.inner').hide();
    console.log(userInput);
  })

  function results() {
    if(object) {
      console.log(object);
      $('.main').empty();
      $('.main').append('<div id="description"></div>');
      $('.main').append('<div id="image"></div>')
      $('#description').append('<h4>'+object.name+'</h4>');
      $('#description').append("<p> You're feeling like a "+object.name +'.');
      $('#description').append('<a href="/stats"><div class="button" id="stats">View Stats</div></a>');
      $('#description').append('<p>'+object.description+'</p>');
      $('#image').append('<img />');
      $('#image > img').attr({src: object.image, id: object.name});

    } else {
      window.location = currentUrl +'/';
    }
  }

})
