//This module that has a functionthat calls for a new date which we will export in app.js

exports.getDate = function () {

  const today = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);

};

exports.getDay = function (){
  const today = new Date();
  const options = {
    weekday: "short",

  };

  return today.toLocaleDateString("en-US", options);


}
