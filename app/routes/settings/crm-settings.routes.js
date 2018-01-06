module.exports = function(app) {

    var accountType = require('../../controllers/settings/crm-settings/account-type.controller.js');
    // var industryType = require('../../controllers/settings/crm-settings/industry-type.controller.js');
    // var ownershipType = require('../../controllers/settings/crm-settings/ownership-type.controller.js');
    // var activityType = require('../../controllers/settings/crm-settings/activity-type.controller.js');
    // var activityStatus = require('../../controllers/settings/crm-settings/activity-status.controller.js');
    // var activityPeriority = require('../../controllers/settings/crm-settings/activity-periority.controller.js');
    // var piplineStaus = require('../../controllers/settings/crm-settings/pipline-staus.controller.js');
    // var contactRole = require('../../controllers/settings/crm-settings/contact-role.controller.js');
    // var quotationTerms = require('../../controllers/settings/crm-settings/quotation-terms.controller.js');
    // var uniteOfMeasure = require('../../controllers/settings/crm-settings/unite-of-measure.controller.js');
    // var opportunityStatus = require('../../controllers/settings/crm-settings/opportunity-status.controller.js');

    // Create a new Note
    app.post('/accountTypeAdd', accountType.create);
    // app.post('/industryTypeAdd', industryType.create);
    // app.post('/ownershipTypeAdd', ownershipType.create);
    // app.post('/activityTypeAdd', activityType.create);
    // app.post('/activityStatusAdd', activityStatus.create);
    // app.post('/activityPeriorityAdd', activityPeriority.create);
    // app.post('/piplineStausAdd', piplineStaus.create);
    // app.post('/contactRoleAdd', contactRole.create);
    // app.post('/quotationTermsAdd', quotationTerms.create);
    // app.post('/uniteOfMeasureAdd', uniteOfMeasure.create);
    // app.post('/opportunityStatusAdd', opportunityStatus.create);

    // Retrieve all Notes
    app.get('/getAccountTypes', accountType.findAll);

    // Retrieve a single Note with noteId
    app.get('/getAccountType/:Id', accountType.findOne);

    // Update a Note with noteId
    app.put('/updateAccountType/:Id', accountType.update);

    // Delete a Note with noteId
    app.delete('/deleteAccountType/:Id', accountType.delete);
}