'use strict';

var UI = (function () {

  var $button,
      $loading,
      $result,
      $feedback,
      $scale,
      $email,

      API;

  function init(cica) {
    $button = document.querySelector('button');
    $loading = document.querySelector('.loading');
    $result = document.querySelector('#result');

    $feedback = document.querySelector('#feedback');
    $scale = document.querySelector('#scale');
    $email = document.querySelector('#email');

    API = cica;

    bindEvents();
  }

  function bindEvents() {
    $button.addEventListener('click', clickHandler);
  }

  function clickHandler() {
    $loading.classList.remove('hide');

    var feedbackData = {
      "feedback": $feedback.value,
      "scale": $scale.value,
      "email": $email.value
    };

    API.send(feedbackData, rerenderer);
  }

  function rerenderer (content) {
    $loading.classList.add('hide');
    $result.textContent = content;
  }

  return {
    init: init
  }
})();
