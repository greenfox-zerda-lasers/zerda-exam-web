'use strict';

var button = document.querySelector('button');
var loading = document.querySelector('.loading');
var result = document.querySelector('#result');

button.addEventListener('click', function(){
  loading.classList.remove('hide');

  var body = {
    "feedback": "stellar experience with stupendous people. simply perfect",
    "scale": "10",
    "email": "lobab@greenfox.academy"
  };

  var request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3000/exam");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(body));
  request.onload = function(e) {
    loading.classList.add('hide');
    result.textContent = e.responseText;
  }

()});
