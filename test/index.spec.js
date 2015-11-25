'use strict';

var expect = require('chai').expect;
var moneyspell = require('../index.js');

describe('speller', function () {
	it('should respect pluralization', function () {
		expect(moneyspell('bg')(1.01, 'BGN')).to.be.equal('един лев и една стотинка');
		expect(moneyspell('bg')(21.50, 'BGN')).to.be.equal('двадесет и един лева и петдесет стотинки');
	});

	it('should skip zeroes', function () {
		expect(moneyspell('bg')(1.0, 'BGN')).to.be.equal('един лев');
		expect(moneyspell('bg')(0.50, 'BGN')).to.be.equal('петдесет стотинки');
	});

	it('should respect currency name gender', function () {
		expect(moneyspell('bg')(1.01, 'EUR')).to.be.equal('едно евро и един евроцент');
	});

	it('should round fraction', function () {
		expect(moneyspell('bg')(70.41, 'BGN')).to.be.equal('седемдесет лева и четиридесет и една стотинки');
	})

});