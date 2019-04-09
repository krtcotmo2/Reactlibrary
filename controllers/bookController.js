const db = require("../models");

module.exports = {
     findAll: function(req, res) {
       db.Book
         .find(req.query)
         .sort({ date: -1 })
         .then(dbModel => {
              res.json(dbModel)
         })
         .catch(err => res.status(422).json(err));
     },
     deleteBook:function(req, res){
          let id = req.params.id;
          db.Book
               .deleteOne({"isbn": id})
               .then(returnVal => {
                    return res.json(returnVal)
               })
               .catch(err=> {return res.status(404).json(err)});
     },
     addBook:function(req, res){       
          db.Book
          .create(req.body)
          .then( returnVal => {
               return res.json(returnVal)
          }).catch(err => res.status(500).json({err:err}));
          
     }
}