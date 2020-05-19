$(document).ready(function () {
  console.log('printing');
    registerBrightnessHandler();
    registerResetHandler();
    registerStatusHandler();
});

/*
 jQuery event handling for brightness slider change functionality
 */
var registerBrightnessHandler = function () {
    $('.brightness-slider').change(function (event) {
        let sliderValue = $(event.target).val();
        let translatedValue = brightnessValueTranslations[sliderValue];
        $('.brightness-value').text(translatedValue);
    });
};

/*
 jQuery event handling for reset button functionality
 */
var registerResetHandler = function () {
    let neutralSliderValue = '2';

    $('button.reset').click(function () {
        $("input[type=\"radio\"]").prop("checked", false);
        $('.brightness-slider').val(neutralSliderValue);
    });
};

var registerStatusHandler = function() {
  let params = getUrlParams(window.location.href);
  $('.value.color').text(colorValueTranslations[params['color']]);
  $('.value.mode').text(modeValueTranslations[params['mode']]);
  $('.value.brightness').text(brightnessValueTranslations[params['brightness']]);
};

var getUrlParams = function (url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[pair[0]] = decodeURIComponent(pair[1]);
  }
  return params;
};

var modeValueTranslations = {
  "line-static": "Linie statisch",
  "line-flashing": "Linie blinkend",
  "alternate": "Abwechselnd Leuchtend",
  "stop-position-1": "Tür / Halteposition 1",
  "stop-position-2": "Tür / Halteposition 2",
  "stop-position-3": "Tür / Halteposition 3",
  "lauflinks": "Lauflicht Links",
  "laufrechts": "Lauflicht Rechts",
  "circle": "Kreislauf"
}

var colorValueTranslations = {
  "red":  "Red",
  "green": "Green",
  "blue": "Blue",
  "yello": "Yellow",
  "white": "White"
}

let brightnessValueTranslations = {
  '1': 'Low',
  '2': 'Medium',
  '3': 'High'
};
