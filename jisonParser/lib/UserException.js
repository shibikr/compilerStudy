var UserException = function(message){
  var error = new Error(message);
  return error;
};

module.exports = UserException;
