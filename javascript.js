function delay(f, ms) {

  return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
      f.apply(savedThis, savedArgs);
    }, ms);
  };

}

function debounce(f, ms) {
	return function() {
		var savedThis = this;
		var savedArgs = arguments;

		setTimeout(function() {
			f.apply(savedThis, savedArgs);
		}, ms);
	};
}



var f = function(a) {
  console.log(a)
};


function throttle (f, ms) {
	var state = null;
  var COOLDOWN = 1;
	var boof;

  return function() {
    if (state) {
    	boof = f.apply(this, arguments);
    	return;
    }

    f.apply(this, arguments);

    state = COOLDOWN;

    setTimeout(function() { state = null }, ms);
  }

}

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется