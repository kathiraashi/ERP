module.exports = function(app) {

    var accountType = require('../../controllers/settings/crm-settings/account-type.controller.js');
    var industryType = require('../../controllers/settings/crm-settings/industry-type.controller.js');
    var ownershipType = require('../../controllers/settings/crm-settings/ownership-type.controller.js');
    var activityType = require('../../controllers/settings/crm-settings/activity-type.controller.js');
    var activityStatus = require('../../controllers/settings/crm-settings/activity-status.controller.js');
    var activityPriority = require('../../controllers/settings/crm-settings/activity-priority.controller.js');
    var piplineStaus = require('../../controllers/settings/crm-settings/pipline-staus.controller.js');
    var contactRole = require('../../controllers/settings/crm-settings/contact-role.controller.js');
    var quotationTerms = require('../../controllers/settings/crm-settings/quotation-terms.controller.js');
    var uniteOfMeasure = require('../../controllers/settings/crm-settings/unite-of-measure.controller.js');
    var opportunityStatus = require('../../controllers/settings/crm-settings/opportunity-status.controller.js');


    // Create a new Note
    app.post('/accountTypeAdd', accountType.create);
    // app.post('/industryTypeAdd', industryType.create);
    // app.post('/ownershipTypeAdd', ownershipType.create);
    // app.post('/activityTypeAdd', activityType.create);
    // app.post('/activityStatusAdd', activityStatus.create);
    // app.post('/activityPeriorityAdd', activityPriority.create);
    // app.post('/piplineStausAdd', piplineStaus.create);
    // app.post('/contactRoleAdd', contactRole.create);
    // app.post('/quotationTermsAdd', quotationTerms.create);
    // app.post('/uniteOfMeasureAdd', uniteOfMeasure.create);
    // app.post('/opportunityStatusAdd', opportunityStatus.create);


    // Retrieve all Notes
    app.get('/getAccountTypes', accountType.findAll);
    // app.get('/getIndustryTypes', industryType.findAll);
    // app.get('/getOwnershipTypes', ownershipType.findAll);
    // app.get('/getActivityTypes', activityType.findAll);
    // app.get('/getActivityStatuses', activityStatus.findAll);
    // app.get('/getActivityPriorities', activityPriority.findAll);
    // app.get('/getPiplineStauses', piplineStaus.findAll);
    // app.get('/getContactRoles', contactRole.findAll);
    // app.get('/getQuotationTerms', quotationTerms.findAll);
    // app.get('/getUniteOfMeasures', uniteOfMeasure.findAll);
    // app.get('/getOpportunityStatuses', opportunityStatus.findAll);


    // Retrieve a single Note with noteId
    app.get('/findAccountType/:Id', accountType.findOne);
    // app.get('/findIndustryType/:Id', industryType.findOne);
    // app.get('/findOwnershipType/:Id', ownershipType.findOne);
    // app.get('/findActivityType/:Id', activityType.findOne);
    // app.get('/findActivityStatus/:Id', activityStatus.findOne);
    // app.get('/findActivityPriority/:Id', activityPriority.findOne);
    // app.get('/findPiplineStaus/:Id', piplineStaus.findOne);
    // app.get('/findContactRole/:Id', contactRole.findOne);
    // app.get('/findQuotationTerms/:Id', quotationTerms.findOne);
    // app.get('/findUniteOfMeasure/:Id', uniteOfMeasure.findOne);
    // app.get('/findOpportunityStatus/:Id', opportunityStatus.findOne);


    // Update a Note with noteId
    app.put('/updateAccountType/:Id', accountType.update);
    // app.put('/updateIndustryType/:Id', industryType.update);
    // app.put('/updateOwnershipType/:Id', ownershipType.update);
    // app.put('/updateActivityType/:Id', activityType.update);
    // app.put('/updateActivityStatus/:Id', activityStatus.update);
    // app.put('/updateActivityPriority/:Id', activityPriority.update);
    // app.put('/updatePiplineStaus/:Id', piplineStaus.update);
    // app.put('/updateContactRole/:Id', contactRole.update);
    // app.put('/updateQuotationTerms/:Id', quotationTerms.update);
    // app.put('/updateUniteOfMeasure/:Id', uniteOfMeasure.update);
    // app.put('/updateOpportunityStatus/:Id', opportunityStatus.update);

    // Delete a Note with noteId
    app.delete('/deleteAccountType/:Id', accountType.delete);
    // app.delete('/deleteIndustryType/:Id', industryType.delete);
    // app.delete('/deleteOwnershipType/:Id', ownershipType.delete);
    // app.delete('/deleteActivityType/:Id', activityType.delete);
    // app.delete('/deleteActivityStatus/:Id', activityStatus.delete);
    // app.delete('/deleteActivityPriority/:Id', activityPriority.delete);
    // app.delete('/deletePiplineStaus/:Id', piplineStaus.delete);
    // app.delete('/deleteContactRole/:Id', contactRole.delete);
    // app.delete('/deleteQuotationTerms/:Id', quotationTerms.delete);
    // app.delete('/deleteUniteOfMeasure/:Id', uniteOfMeasure.delete);
    // app.delete('/deleteOpportunityStatus/:Id', opportunityStatus.delete);

}