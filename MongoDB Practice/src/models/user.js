let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  createdAt: Date,
  updatedAt: Date
});

//Virtual Property
userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
})
  
userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ');
    this.firstName = str[0];
    this.lastName = str[1];
})

//Instance Methods
userSchema.methods.getInitials = function() {
    return this.firstName[0] + this.lastName[0];
}

//Static Method
userSchema.statics.getUsers = function() {
    return new Promise((resolve, reject) => {
      this.find((err, docs) => {
        if(err) {
          console.error(err);
          return reject(err);
        }
        resolve(docs);
      })
    })
}

//Middlewares - pre-save hook
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = Date.now();
    }
    // Call the next function in the pre-save middleware chain
    next();   
})

module.exports = mongoose.model('User', userSchema);