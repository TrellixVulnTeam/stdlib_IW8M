const async = require('async');
const flybase = require('flybase');
const postsRef = flybase.init(
	process.env.FLYBASE_APP,
	process.env.FLYBASE_COLLECTION,
	process.env.FLYBASE_APIKEY
);
module.exports = async function(){
	postsRef.push({
		name: "Joe"
		});

};
