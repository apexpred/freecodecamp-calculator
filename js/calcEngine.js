var calcEngine = (function () {

	var leftVal = 0,
		rightVal = 0,
		opCode,
		result;

	var execute = function () {
		switch (opCode) {
			case '+':
				result = leftVal + rightVal;
				break;
			case '-':
				result = leftVal - rightVal;
				break;
			case '*':
				result = leftVal * rightVal;
				break;
			case '/':
				result = rightVal !== 0 ? leftVal / rightVal : 0;
				break;
		}
	};

	var setLeftVal = function (x) { leftVal = x ;};
	var setRightVal = function (x) { rightVal = x; };
	var setOpCode = function (x) { opCode = x; };
	var getOpCode = function () { return opCode; };
	var getRightVal = function () { return rightVal; };
	var getLeftVal = function () { return leftVal; };
	var getResult = function () { return result; };
	var clear = function () {
		leftVal = 0;
		rightVal = 0;
		opCode = '';
	};
 
	return {
		setLeftVal: setLeftVal,
		setRightVal: setRightVal,
		setOpCode: setOpCode,
		setLeftVal: setLeftVal,
		getRightVal: getRightVal,
		getLeftVal: getLeftVal,
		getOpCode: getOpCode,
		clear: clear,
		getResult: getResult,
		execute: execute
	};
})();