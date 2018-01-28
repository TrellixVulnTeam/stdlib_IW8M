const ejs              = require('ejs');
const template = __dirname + '/../pages/index.ejs';

/**
* The "Live Blog" landing page for your app.
*   To modify the template, check out /pages/index.ejs.
* @returns {buffer}
*/
module.exports = async (callback) => {
	var templateVars = {
		apikey: process.env.FLYBASE_APIKEY,
		appname: process.env.FLYBASE_APP,
		collection: process.env.FLYBASE_COLLECTION
	};
	ejs.renderFile(template, templateVars, {}, (err, response) => {
		callback(err, new Buffer(response || ''), {'Content-Type': 'text/html'});
	});
};