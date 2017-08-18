var breadApp = new Framework7();
var $$ = Dom7;
var mainView = breadApp.addView('.view-main', {});

$(function(){
  var pickerYeast = breadApp.picker({
    input: '#picker-yeast',
    cols: [{
      textAlign: 'center',
      values: ('1.5 3 40').split(' '),
      displayValues: ('Seco Fresco Natural').split(' '),
    }]
  });
  var flour_input = $('.flour .input');
  var salt_input = $('.salt .input');
  var water_input = $('.water .input');
  var yeast_input = $('.yeast .input');

  var flour_value = flour_input.val();
  var salt_percent = salt_input.val();
  var water_percent = water_input.val();
  var yeast_percent = yeast_input.val();

  syncAll(flour_value, salt_percent, water_percent, yeast_percent);

  flour_input.on('input', function() {
    flour_value = $(this).val();
    syncAll(flour_value, salt_percent, water_percent, yeast_percent);
  });
  salt_input.on('input', function() {
    salt_percent = $(this).val();
    syncAll(flour_value, salt_percent, water_percent, yeast_percent);
  });
  water_input.on('input', function() {
    water_percent = $(this).val();
    syncAll(flour_value, salt_percent, water_percent, yeast_percent);
  });
  yeast_input.on('change', function() {
    yeast_percent = $(this).val();
    syncAll(flour_value, salt_percent, water_percent, yeast_percent);
  });
});
function percent(a, b) {
  return ((a * b) / 100);
}
function syncAll(flour_value, salt_percent, water_percent, yeast_percent) {
  $('.flour .value').text(flour_value);
  $('.salt .percent').text(salt_percent);
  $('.water .percent').text(water_percent);
  $('.yeast .input').val(yeast_percent);

  var salt_value = parseInt(percent(flour_value, salt_percent));
  var water_value = parseInt(percent(flour_value, water_percent));
  var yeast_value = parseInt(percent(flour_value, yeast_percent));

  flour_total = Number($('.flour .value').text());
  salt_total = Number($('.salt .value').text());
  water_total = Number($('.water .value').text());
  yeast_total = Number($('.yeast .value').text());
  var total = 0;

  if (flour_total > 0) {
    total = parseInt(flour_total + salt_total + water_total + yeast_total);
  }

  console.log()

  $('.salt .value').text(salt_value);
  $('.water .value').text(water_value);
  $('.yeast .value').text(yeast_value);
  $('.total .value').text(total);
}
