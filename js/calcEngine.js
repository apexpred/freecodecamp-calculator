var calcEngine = (function () {

	var leftVal,
		rightVal,
		opCode,
		result;

	var execute = function () {
		switch (opCode) {
			case 'a':
				result = leftVal + rightVal;
				break;
			case 's':
				result = leftVal - rightVal;
				break;
			case 'm':
				result = leftVal * leftVal;
				break;
			case 'd':
				result = rightVal !== 0 ? leftVal / rightVal : 0;
				break;
		}
	};

	var setLeftVal = function (x) { return leftVal = x ;};
	var setRightVal = function (x) { return rightVal = x; };
	var setOpCode = function (x) { return opCode = x };
	var getOpCode = function (x) { return opCode; };
	var getRightVal = function (x) { return rightVal; };
	var getLeftVal = function (x) { return leftVal; };
	var getResult = function (x) { return result; };

	return {
		setLeftVal: setLeftVal,
		setRightVal: setRightVal,
		setOpCode: setOpCode,
		setLeftVal: setLeftVal,
		setRightVal: setRightVal,
		getResult: getResult
	};

})();