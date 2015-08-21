'use strict';

var numspell = require('numspell');
var currencies = {
	BGN: {
		whole: {
			singular: 'lev',
			plural: 'leva'
		},
		fraction: {
			singular: 'stotinka',
			plural: 'stotinki'
		}
	},
	EUR: {
		whole: {
			singular: 'euro',
			plural: 'euro'
		},
		fraction: {
			singular: 'eurocent',
			plural: 'eurocents'
		}
	},
	USD: {
		whole: {
			singular: 'dollar',
			plural: 'dollars'
		},
		fraction: {
			singular: 'cent',
			plural: 'cents'
		}
	}
};

var sayIt = numspell('en');

module.exports = function (whole, fraction, currency) {
	if (typeof currencies[currency] === 'undefined') {
		throw new Error('Unknown currency ' + currency.toString());
	}

	currency = currencies[currency];

	var result = [];

	if (whole !== 0) {
		result.push(sayIt(whole) + ' ' + (whole === 1 ? currency.whole.singular : currency.whole.plural));
	}
	if (fraction !== 0) {
		result.push(sayIt(fraction) + ' ' + (fraction === 1 ? currency.fraction.singular : currency.fraction.plural));
	}

	return result.join(' and ');
};

