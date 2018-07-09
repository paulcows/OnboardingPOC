/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/OnboardingPOC_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT EASYDEV'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_OnboardingPOC_db_schema = [];
const db_OnboardingPOC_db = [];

/**
 * SCHEMA DB OnboardingPOC_db
 */



 /**
  * User
  */
db_OnboardingPOC_db_schema.User = new mongoose.Schema({
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
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./OnboardingPOC_db_customSchema.js');
var OnboardingPOC_db_model = require('./OnboardingPOC_db_crud.js');

// Declare mongoose model

db_OnboardingPOC_db.User = OnboardingPOC_db_model.connection.model('User', db_OnboardingPOC_db_schema.User );

module.exports = db_OnboardingPOC_db;

// Create ADMIN user if does not exist
createUser.createUser();
