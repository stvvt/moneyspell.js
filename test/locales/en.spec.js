'use strict';

var expect = require('chai').expect;
var moneyspellEn = require('../../lib/locales/en.js');

describe('EN speller', function () {
	it('should respect pluralization', function () {
		expect(moneyspellEn(1, 1, 'BGN')).to.be.equal('one lev and one stotinka');
		expect(moneyspellEn(21, 50, 'BGN')).to.be.equal('twenty one leva and fifty stotinki');
	});

	it('should skip zeroes', function () {
		expect(moneyspellEn(1, 0, 'BGN')).to.be.equal('one lev');
		expect(moneyspellEn(0, 50, 'BGN')).to.be.equal('fifty stotinki');
	});
});