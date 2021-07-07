const database = require('./database');
const UserModel = require('./models/user');

let model = new UserModel();

model.fullName = 'Twesha Satia';

console.log("Output model fields as JSON:",model.toJSON());  
console.log("Output the full name:",model.fullName);

model.save()
   .then(doc => {
     console.log("Record created",doc);
   })
   .catch(err => {
     console.error("Error:",err);
   })

let initials = model.getInitials()
console.log("Initials:",initials);

UserModel.getUsers()
  .then(docs => {
    console.log("Users List:",docs);
  })
  .catch(err => {
    console.error("Error:",err);
  })

//Query Building
UserModel.find()                   // find all users
         .skip(2)                // skip the first 2 items
         .limit(10)                // limit to 10 items
         .sort({firstName: 1})     // sort ascending by firstName
         .select({firstName: true}) // select firstName only
         .exec()                   // execute the query
         .then(docs => {
            console.log("Query Output:",docs);
          })
         .catch(err => {
            console.error("Error:",err);
          })
