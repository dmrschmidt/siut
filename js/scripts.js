$(document).ready(function () {
    registerBrightnessHandler();
    registerResetHandler();
});

/*
 jQuery event handling for brightness slider change functionality
 */
var registerBrightnessHandler = function () {
    let sliderValueTranslations = {
        '1': 'Low',
        '2': 'Medium',
        '3': 'High'
    };

    $('.brightness-slider').change(function (event) {
        let sliderValue = $(event.target).val();
        let translatedValue = sliderValueTranslations[sliderValue];
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
