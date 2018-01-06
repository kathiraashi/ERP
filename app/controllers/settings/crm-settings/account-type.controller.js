var CRMsettings = require('../../../models/settings/crm-settings.model.js');

exports.create = function(req, res) {
    // Create and Save a new AccountType
        if(!req.body.accountType) {
            res.status(400).send({message: "Account Type can not be empty"});
        }
        var varAccountType = new CRMsettings.AccountType({
            account_type: req.body.accountType, 
            user_id: req.body.userId || "001",
            user_type: req.body.userType || "Admin", 
        });

        varAccountType.save(function(err, data) {
            if(err) {
                res.status(500).send({message: "Some error occurred while creating the Account Type."});
            } else {
                res.send(data);
            }
        });
};

exports.findAll = function(req, res) {
    // Retrieve and return all notes from the database.
        CRMsettings.AccountType.find(function(err, accountTypes){
            if(err) {
                res.status(500).send({message: "Some error occurred while retrieving Account Type."});
            } else {
                res.send(accountTypes);
            }
        });
};

exports.findOne = function(req, res) {
    // Find a single note with a noteId
        CRMsettings.AccountType.findById(req.params.Id, function(err, data) {
            if(err) {
                res.status(500).send({message: "Could not retrieve Account Type with id " + req.params.Id});
            } else {
                res.send(data);
            }
        });

};

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
        CRMsettings.AccountType.findById(req.params.Id, function(err, accountType) {
            if(err) {
                res.status(500).send({message: "Could not find a Account Type with id " + req.params.Id});
            }
            accountType.account_type = req.body.accountType;
            accountType.user_id = req.body.userId || "001",
            accountType.user_type = req.body.userType || "Admin", 

            accountType.save(function(err, data){
                if(err) {
                    res.status(500).send({message: "Could not update Account Type with id " + req.params.Id});
                } else {
                    res.send(data);
                }
            });
        });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
        CRMsettings.AccountType.remove({_id: req.params.Id}, function(err, data) {
            if(err) {
                res.status(500).send({message: "Could not delete Account Type with id " + req.params.Id});
            } else {
                res.send({message: "Account Type deleted successfully!"})
            }
        });
};