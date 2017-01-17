
var AJAX = (function(){
  function send (data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/exam");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onreadystatechange = function() {
      if (request.readyState === XMLHttpRequest.DONE) {
        callback(request.responseText);
      }
    }
  }

  return {
    send: send
  }
})();
