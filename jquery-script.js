$(document).ready(() => {
  //number 1
  $('#underlineButton').click(() => {
    $('#number1').addClass('underline');
  });

  $('#resetButton').click(() => {
    $('#number1').removeClass('underline');
  });

  //number 2
  $('#scrollTop').click(() => {
    $(window).scrollTop(0);
  });

  //number 3
  $('#disableRight').on('contextmenu', (e) => {
    return false;
  });

  //number 4
  $('#addImg').click(() => {
    $('#backgroundImg').css(
      'background-image',
      'url("https://wallpaperaccess.com/full/3606066.jpg")'
    );
  });
  $('#removeImg').click(() => {
    $('#backgroundImg').css('background-image', 'none');
  });

  //number 5
  $('#countElements').click(() => {
    alert(`${$('#number1 *').length}`);
  });

  //number 6
  var count_checked = () => {
    var n = $('input:checked').length;
    $('#checked').text(n + (n === 1 ? ' is' : ' are') + ' checked.');
  };
  count_checked();
  $('input[type=checkbox]').on('click', count_checked);

  //number 7
  $('#wrapAllElement').click(() => {
    $('p.number7')
      .contents()
      .filter(function () {
        return this.nodeType !== 1;
      })
      .wrap('<i></i>');
  });

  //number 8
  $('div.8').click(function () {
    var color = $(this).css('background-color');
    $('span.8').text(`That div is ${this.title} with ${color} .`);
  });

  //number9
  var words = $('p.9').first().text().split(/\s+/);
  var text = words.join('</span> <span class="9">');
  $('p.9')
    .first()
    .html('<span class="9">' + text + '<span class="9">');
  $('span.9').on('click', function () {
    $(this).css('background-color', 'blue');
  });

  //number 10
  $('.btn10').dblclick(function () {
    $('.10').css('background-color', 'red');
  });

  $('.btn10Reset').dblclick(function () {
    $('.10').css('background-color', 'white');
  });

  //number 11
  $('#text11').change(() => {
    $('<p>The text has changed.</p>').appendTo('.11txt');
  });

  //number 12
  $('.number12').click(function (event) {
    $('.area12').html(`Clicked a ${event.target.nodeName}`);
  });

  //number 13
  var lastTouch, timeDiff;
  $('.number13').click(function (event) {
    if (lastTouch) {
      timeDiff = event.timeStamp - lastTouch;
      $('#click13').text('Time since last event: ' + parseInt(timeDiff));
    } else {
      $('#click13').text('Click Again');
    }
    lastTouch = event.timeStamp;
  });

  //number 14
  $('.number14').hover(() => {
    $('.number14').css('border-color', 'red');
  });
  $('#num14').hover(() => {
    $('.number14').css('border-color', 'black');
  });

  //number 15
  $(window).resize(() => {
    $('.number15').text(
      `Height: ${$(window).height()}  Width: ${$(window).width()}`
    );
  });

  //number 16
  $('.btn16').click(() => {
    $('p.number16').after(document.createTextNode('Extra text. '));
  });

  //number17
  $('body').delegate('h1.number17', 'click', function () {
    $(this).after('<h1>Another Header!</h1>');
  });
});
