/**
 * DictionaryController
 *
 * @description :: Server-side logic for managing dictionaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getWords:function(req, res) {
		var _words = [];

		Dictionary.find().sort({english:'desc'}).exec(function findCB(err, found){
		  while (found.length){
				_words.push(found.pop())
			}
			return res.json(_words);
		});
	},
	getWordsMonth:function(req, res){
		Dictionary.query('select Month(createdAt) as month, count(english) words from dictionary group by Month(createdAt);', function(err,results){
			if (err) return res.serverError(err);
			return res.json(results);
		});
	}
};
