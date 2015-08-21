'use strict';

var expect = require('chai').expect;
var moneyspellBg = require('../../lib/locales/bg.js');

describe('BG speller', function () {
	it('should respect pluralization', function () {
		expect(moneyspellBg(1, 1, 'BGN')).to.be.equal('един лев и една стотинка');
		expect(moneyspellBg(21, 50, 'BGN')).to.be.equal('двадесет и един лева и петдесет стотинки');
	});

	it('should skip zeroes', function () {
		expect(moneyspellBg(1, 0, 'BGN')).to.be.equal('един лев');
		expect(moneyspellBg(0, 50, 'BGN')).to.be.equal('петдесет стотинки');
	});

	it('should respect currency name gender', function () {
		expect(moneyspellBg(1, 1, 'EUR')).to.be.equal('едно евро и един евроцент');
	});
});