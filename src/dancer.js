// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
  this.styleSettings = {
    top: top,
    left: left
  };
  this.step();
  this.setPosition();
};

Dancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log(this.$node);
  setTimeout(this.step.bind(this), this.time);
};

Dancer.prototype.setPosition = function () {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css(this.styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
// makeDancer.setPosition(top, left);
