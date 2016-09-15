var watsonapi = require('watson-developer-cloud');

var watson = {
	toneAnalyzer: watsonapi.tone_analyzer({
		username: process.env.WATSON_TONE_USERNAME,
		password: process.env.WATSON_TONE_PASSWORD,
		version: 'v3',
		version_date: '2016-05-19'
	})
};

module.exports = watson;