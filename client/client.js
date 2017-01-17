

// UI.init(AJAX);

var mockSend = sinon.spy();

var mockAJAX = {
  send: mockSend
}

mockSend.calledWith({
  feedback: "jo",
  scale: 1,
  email: ""
}, valami fuggveny);

UI.init(mockAJAX);
