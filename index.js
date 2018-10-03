// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

String.prototype.blank = function() {
  let b1 = new RegExp("^ $");
  let b2 = new RegExp("^$");

  return !!(this.match(b1) || this.match(b2));
}

function emailParts(email) {
  return email.split("@");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }

  // Makes the phrase LOUDER.
  this.louder = function() {
    return this.content.toUpperCase();
  };
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();