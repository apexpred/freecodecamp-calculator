$(document).ready(function () {

	var calcOn = false;
	var vals = '';
	var opStr = '';
	var valsArr = [];
	var opCode;
	var result;
	


	$('.power').on('click', function () {

		if (!calcOn) {
			
			$('.key').addClass('on');
			calcOn = !calcOn;


			$('.keypad').on('click', 'div', function () {
				//console.log($(this).data('val'));
				var value = $(this).data('val');



				if (value !== undefined) {
					
					if (typeof value === 'number') {
						vals += value;
						opStr += value;
						$('.display').html(opStr);
					}
					else if (value === 'c') {
						$('.display').html('');
						calcEngine.clear();
						
						console.log(calcEngine.getLeftVal());
						console.log(calcEngine.getRightVal());
						console.log(calcEngine.getResult());
						console.log(valsArr);
					}
					else if (typeof value === 'string' && value !== '=') {
						valsArr.push(vals);
						vals = '';
						valsArr.push(value);

						opStr += value;
						$('.display').html(opStr);
					}
					else if (value === '=') {
						valsArr.push(vals);
						

						valsArr.forEach(function (val, index) {
							
							if (index === 0) {
								calcEngine.setLeftVal(parseInt(val));
								
							}
							else if ((index + 1) % 2 !== 0) {
								
								calcEngine.setRightVal(parseInt(val));
								opStr += calcEngine.getRightVal();
								
								calcEngine.execute();

								
								console.log(calcEngine.getResult());
								if (index !== valsArr.length - 1) {
									calcEngine.setLeftVal(calcEngine.getResult());
								}
								
							}
							else if ((index + 1) % 2 === 0) {
								calcEngine.setOpCode(val);
							}
						});

						$('.display').html(calcEngine.getResult());
						vals = '';
						valsArr = [];
						opStr = '';

					}

				}

			});
		}
		else {
			
			$('.key').removeClass('on');
			calcOn = !calcOn;

			$('.keypad').off('click', 'div');
		}


	});


});