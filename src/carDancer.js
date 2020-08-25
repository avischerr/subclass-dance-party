var CarDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // var css = this.styleSettings;
  this.$node = $('<span class="car"></span>');
  // this.$node.css(this.styleSettings);

};

CarDancer.prototype = Object.create(Dancer.prototype);
CarDancer.prototype.constructor = CarDancer;

CarDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // THIS IS WHERE THE ACTUAL BEHAVIOR HAPPENS
  this.$node.fadeToggle();
};