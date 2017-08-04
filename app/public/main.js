//Clears all previous entries
function userInfo(){
    var userName = "";
    var sex = "";
    var age = "";
    var profession = "";
    var location = "";
    var userEntries = [];

    // var addEntry = $('#add-entry').on('click', function(event) {
    // event.preventDefault();
    var userSurvey = 

    // Capture user inputs and store into constructor 
    var newUser = function(userName, sex, age, picture, location) {
      this.userName = $('#userName-input').val().trim();
      this.sex = $('#sex-input').val().trim();
      this.age = $('#age-input').val().trim();
      this.picture = $('#profession-input').val().trim();
      this.location = $('#location-input').val().trim();
      }

    var addEntry = $('#add-entry').on('click', function(event) {
    event.preventDefault();

    // constructs and organizes data as an object
    var userSurveySubmission = {};
      this.userName = userName;
      this.sex = sex;
      this.age = age;
      this.profession = profession;
      this.location = location;
        
    // push object into array
    userEntries.push(userSurveySubmission);

    }
}