describe('Feedback form', function() {

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture =   '<textarea id="feedback" cols="30" rows="10"></textarea>' +
                        '<input id="scale" type="number">' +
                    '<input type="email" id="email">' +
                          '<button></button>' +
                        '<span class="loading hide">Loading</span>' +

                      '<ul id="result">' +
                          'alma' +
                      '</ul>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  beforeEach(function() {
   window.UI.init();
   console.log(window.UI);
  });

  it('has a dummy spec to test 2 + 2', function() {
    // An intentionally failing test. No code within expect() will never equal 4.
    expect(2 + 2).toEqual(4);
  });
  
  it('result is alma', function() {
    expect(document.getElementById('result').innerHTML).toBe('alma');
  });

});
