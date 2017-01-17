'use strict';

var test = require('tape');
var validator = require('./validator.js');

test("validator accepts valid email, a scale of 15 and positive feedback", function (t) {
  t.ok(validator("lobab@gfa.com", 15, "awesome amazing perfect"));
  t.end();
});

test("validator rejects unfilled email, a scale of 15 and positive feedback", function (t) {
  t.notOk(validator("", 15, "awesome amazing perfect"));
  t.end();
});

test("validator rejects valid email, a scale of 9 and positive feedback", function (t) {
  t.notOk(validator("lobab@gfa.com", 9, "awesome amazing perfect"));
  t.end();
});


test("validator rejects valid email, a scale of -10 and positive feedback", function (t) {
  t.notOk(validator("lobab@gfa.com", -10, "awesome amazing perfect"));
  t.end();
});


test("validator accepts valid email, a scale of 9 and perfect perfect perfect feedback", function (t) {
  t.ok(validator("lobab@gfa.com", 10, "perfect perfect perfect "));
  t.end();
});
