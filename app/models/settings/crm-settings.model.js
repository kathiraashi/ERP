var mongoose = require('mongoose');

var AccountTypeSchema = mongoose.Schema({
    account_type: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);

var IndustryTypeSchema = mongoose.Schema({
    industry_type: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);

var OwnershipTypeSchema = mongoose.Schema({
    ownership_type: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);

var ActivityTypeSchema = mongoose.Schema({
    activity_type: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);

var ActivityStatusSchema = mongoose.Schema({
    activity_status: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);

var ActivityPerioritySchema = mongoose.Schema({
    activity_periority: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var PiplineStausSchema = mongoose.Schema({
    pipline_staus: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var ContactRoleSchema = mongoose.Schema({
    contact_role: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var QuotationTermsSchema = mongoose.Schema({
    quotation_terms_name: String,
    quotation_terms: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var UniteOfMeasureSchema = mongoose.Schema({
    unite_of_measure: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var OpportunityStatusSchema = mongoose.Schema({
    opportunity_status: String,
    user_id: String,
    user_type: String
    }, 
    { timestamps: true }
);


var varAccountType = mongoose.model('AccountType', AccountTypeSchema, 'CRMSettingsAccountType');
var varIndustryType = mongoose.model('IndustryType', IndustryTypeSchema, 'CRMSettingsIndustryType');
var varOwnershipType = mongoose.model('OwnershipType', OwnershipTypeSchema, 'CRMSettingsOwnershipType');
var varActivityType = mongoose.model('ActivityType', ActivityTypeSchema, 'CRMSettingsActivityType');
var varActivityStatus = mongoose.model('ActivityStatus', ActivityStatusSchema, 'CRMSettingsActivityStatus');
var varActivityPeriority = mongoose.model('ActivityPeriority', ActivityPerioritySchema, 'CRMSettingsActivityPeriority');
var varPiplineStaus = mongoose.model('PiplineStaus', PiplineStausSchema, 'CRMSettingsPiplineStaus');
var varContactRole = mongoose.model('ContactRole', ContactRoleSchema, 'CRMSettingsContactRole');
var varQuotationTerms = mongoose.model('QuotationTerms', QuotationTermsSchema, 'CRMSettingsQuotationTerms');
var varUniteOfMeasure = mongoose.model('UniteOfMeasure', UniteOfMeasureSchema, 'CRMSettingsUniteOfMeasure');
var varOpportunityStatus = mongoose.model('OpportunityStatus', OpportunityStatusSchema, 'CRMSettingsOpportunityStatus');


module.exports = {
    AccountType : varAccountType,
    IndustryType : varIndustryType,
    OwnershipType : varOwnershipType,
    ActivityType : varActivityType,
    ActivityStatus : varActivityStatus,
    ActivityPeriority : varActivityPeriority,
    PiplineStaus : varPiplineStaus,
    ContactRole : varContactRole,
    QuotationTerms : varQuotationTerms,
    UniteOfMeasure : varUniteOfMeasure,
    OpportunityStatus : varOpportunityStatus
};