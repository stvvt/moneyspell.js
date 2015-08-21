'use strict';

var numspell = require('numspell');
var currencies = {
	BGN: {
		whole: {
			singular: 'лев',
			plural: 'лева',
			gender: numspell.bg.GENDER_MASCULINE
		},
		fraction: {
			singular: 'стотинка',
			plural: 'стотинки',
			short: 'ст',
			gender: numspell.bg.GENDER_FEMININE
		}
	},
	EUR: {
		whole: {
			singular: 'евро',
			plural: 'евро',
			gender: numspell.bg.GENDER_NEITHER
		},
		fraction: {
			singular: 'евроцент',
			plural: 'евроцента',
			gender: numspell.bg.GENDER_MASCULINE
		}
	},
	USD: {
		whole: {
			singular: 'долар',
			plural: 'долара',
			gender: numspell.bg.GENDER_MASCULINE
		},
		fraction: {
			singular: 'цент',
			plural: 'цента',
			gender: numspell.bg.GENDER_MASCULINE
		}
	}
};

var sayIt = numspell('bg');

module.exports = function (whole, fraction, currency) {
	if (typeof currencies[currency] === 'undefined') {
		throw new Error('Unknown currency ' + currency.toString());
	}

	currency = currencies[currency];

	var result = [];

	if (whole !== 0) {
		result.push(sayIt(whole, currency.whole.gender) + ' ' + (whole === 1 ? currency.whole.singular : currency.whole.plural));
	}
	if (fraction !== 0) {
		result.push(sayIt(fraction, currency.fraction.gender) + ' ' + (fraction === 1 ? currency.fraction.singular : currency.fraction.plural));
	}

	return result.join(' и ');
};

