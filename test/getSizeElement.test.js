var should = require('should'),
	gSizeE = require('../src/modules/getSizeElement'),
	cDivID = require('../src/modules/createDivWithID'),
	targetID = require('../src/modules/ciblingDomID'),
	gSizeW =  require('../src/modules/getSizeWindow'),
	gPosE = require('../src/modules/getPositionElement'),
	cElem = require('../src/modules/centerElement');

describe('Positionning & sizes elements', function() {

	it('Return object with element sizes', function() {
		var nDiv = cDivID("test0");

		nDiv.setAttribute("style","width:100px; height:180px");

		document.body.appendChild(nDiv);

		var sizeDiv = gSizeE(targetID("test0"));

		sizeDiv.height.should.equal(180);
		
		sizeDiv.width.should.equal(100);

	});


	it('Return object with window sizes', function() {
		var infoWin = gSizeW();

		infoWin.width.should.equal(window.innerWidth);

		infoWin.height.should.equal(window.innerHeight);

	});

	it('Positionning at center of window', function(){
		
		var nDiv = cDivID("test1");
			
			document.body.appendChild(nDiv);
			
			var objDiv = targetID("test1");
			
				objDiv.setAttribute("style","width:100px; height:100px");

			var objSizeElem = gSizeE(objDiv);
			var infoWin = gSizeW();

			cElem(objDiv);
				//console.log(" --- ",objDiv.style.left)
			var posLeft = (parseInt(infoWin.width - objSizeElem.width) / 2);
			var posTop = (parseInt(infoWin.height - objSizeElem.height) / 2);
			
			var compareObjPos = objDiv.style;

			parseInt(compareObjPos.left).should.equal(posLeft);
			parseInt(compareObjPos.top).should.equal(posTop);

	});


});

