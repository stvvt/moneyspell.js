'use strict';

module.exports = function (language) {
	if (typeof module.exports[language] === 'undefined') {
		throw new Error('Unknown language');
	}

	var spell = module.exports[language];

	return function (amount, currency) {
		var whole = Math.floor(amount),
			fraction = Math.round(Math.abs(amount - whole)*100);

		return spell(whole, fraction, currency);
	}
};

module.exports.bg = require('./lib/locales/bg.js');
module.exports.en = require('./lib/locales/en.js');