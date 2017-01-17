'use strict';

var niceWords = ["amazing", "awesome", "blithesome", "excellent", "fabulous",
                 "fantastic", "favorable", "fortuitous", "great", "incredible",
                 "ineffable", "mirthful", "outstanding", "perfect",
                 "propitious", "remarkable", "smart", "spectacular", "splendid",
                 "stellar", "stupendous", "super", "ultimate", "unbelievable",
                 "wondrous"];

function validator (email, scale, feedback) {
  var niceWordCount = feedback.split(' ').reduce(function(count, word) {
                        if (niceWords.indexOf(word) !== -1) {
                          return ++count;
                        }
                        return count;
                      }, 0);
  // var niceWordCount = niceWords.reduce(function(count, word) {
  //                       if (feedback.split(' ').indexOf(word) !== -1) {
  //                         return ++count;
  //                       }
  //                       return count;
  //                     }, 0);
  console.log(niceWordCount);
  return email.indexOf('@') !== -1 && scale >= 10 && niceWordCount >= 3;
}

module.exports = validator;
