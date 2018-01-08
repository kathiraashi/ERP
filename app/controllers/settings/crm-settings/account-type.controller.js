var CRMsettings = require('../../../models/settings/crm-settings.model.js');

exports.create = function(req, res) {
        if(!req.body.accountType) {
            res.status(400).send({status:"False", message: "Account Type can not be empty"});
        }
        var varAccountType = new CRMsettings.AccountType({
            account_type: req.body.accountType, 
            company_id_id: req.body.companyId || "001",
            user_id: req.body.userId || "001",
            user_type: req.body.userType || "Admin", 
        });

        varAccountType.save(function(err, result) {
            if(err) {
                res.status(500).send({status:"False", message: "Some error occurred while creating the Account Type."});
            } else {
                res.send({status:"True", data:result });
            }
        });
};

exports.findAll = function(req, res) {
        CRMsettings.AccountType.find(function(err, accountTypes){
            if(err) {
                res.status(500).send({status:"False", message: "Some error occurred while retrieving Account Type."});
            } else {
                res.send({status:"True", data: accountTypes } );
            }
        });
};

exports.findOne = function(req, res) {
        CRMsettings.AccountType.findById(req.params.Id, function(err, result) {
            if(err) {
                res.status(500).send({ status:"False", message: "Could not retrieve Account Type with id " + req.params.Id});
            } else {
                res.send({status:"True", data: result } );
            }
        });

};

exports.update = function(req, res) {
        CRMsettings.AccountType.findById(req.params.Id, function(err, accountType) {
            if(err) {
                res.status(500).send({status:"False", message: "Could not find a Account Type with id " + req.params.Id});
            }
                accountType.account_type = req.body.account_type;
                accountType.company_id = req.body.companyId || "001",
                accountType.user_id = req.body.userId || "001",
                accountType.user_type = req.body.userType || "Admin",

            accountType.save(function(err, result){
                if(err) {
                    res.status(500).send({status:"False", message: "Could not update Account Type with id " + req.params.Id});
                } else {
                    res.send({status:"True", data: result });
                }
            });
        });
};

exports.delete = function(req, res) {
        CRMsettings.AccountType.remove({_id: req.params.Id}, function(err, data) {
            if(err) {
                res.status(500).send({status:"False", message: "Could not delete Account Type with id " + req.params.Id});
            } else {
                res.send({status:"True", message: "Account Type Deleted successfully!"})
            }
        });
};