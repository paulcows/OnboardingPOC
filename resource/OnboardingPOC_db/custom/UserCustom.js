
const app = require('../../../app.js');
const db_OnboardingPOC_db = require('../../../db/OnboardingPOC_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB User
 * 
	{
		mail: {
			type: 'String', 
			required : true
		},
		name: {
			type: 'String', 
			required : true
		},
		password: {
			type: 'String', 
			required : true
		},
		roles: {
			type: 'String'
		},
		surname: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		
	}
 * 
 * 
 * 
 * 
		Name: changePassword
		Description: Change password of user from admin
		Params: 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



//CRUD - EDIT

app.post(properties.api + '/Users/:id', function (req, res) {
	let user = req.body;
	delete user.password;

	db_OnboardingPOC_db.User.findByIdAndUpdate(req.params.id, user, {
		'new': true
	}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/*
Name: changePassword
Description: Change password of user from admin
Params: 
*/
app['post'](properties.api + '/Users/:id/changePassword', function (req, res) {

	db_OnboardingPOC_db.User.findOne({
		username: req.user.username,
		password: req.body.passwordAdmin
	}).exec(function (err, user) {
		if (err) return handleError(err, res);
		if (!user) return handleError("Admin password not valid", res);

		db_OnboardingPOC_db.User.findByIdAndUpdate(req.params.id, {
			password: req.body.passwordNew
		}, {
			'new': true
		}, function (err, obj) {
			if (err) return handleError(err, res);
			res.send({
				success: true
			});
		});

	});
});



/*
Name: changePassword
Description: Change password of user from admin
Params: 
*/
app['post'](properties.api + '/Users/:id/changePassword', function(req, res){
	res.send([]);
});
			
