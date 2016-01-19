/**
 * SeriesController
 *
 * @description :: Server-side logic for managing series
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//custom method to have my series order by name and season
	getSeries:function(req, res) {
		var _series = [];

		Series.find().sort({nombre:'desc', temporada:'desc'}).exec(function findCB(err, found){
		  while (found.length){
				_series.push(found.pop())
			}
			return res.json(_series);
		});
	}
};
