const database = require('./database');
const EmailModel = require('./models/email');

// create a record
let mail = new EmailModel({
  email: 'twesha.satia@GMAIL.COM'
});

mail.save()
   .then(doc => {
     console.log("Record created",doc);
   })
   .catch(err => {
     console.error("Error:",err);
   })


//Fetch all records
EmailModel
  .find()
  .then(doc => {
    console.log("All records:",doc);
  })
  .catch(err => {
    console.error("Error:",err);
  })

//Find record
EmailModel
  .find({
    email: 'twesha.satia@gmail.com'   // search query
  })
  .then(doc => {
    console.log("Record found:",doc);
  })
  .catch(err => {
    console.error("Error:",err);
  })

//Update Record
EmailModel
  .findOneAndUpdate(
    {
      email: 'twesha.satia@gmail.com'  // search query
    }, 
    {
      email: 'twesha.satia@gmail.com'   // field:values to update
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {
    console.log("Updated record:", doc);
  })
  .catch(err => {
    console.error("Error:",err);
  })

//Delete Record
EmailModel
  .findOneAndRemove({
    email: 'twesha.satia@gmail.com'
  })
  .then(response => {
    console.log("Deleted Record:",response);
  })
  .catch(err => {
    console.error("Error:",err);
  })
