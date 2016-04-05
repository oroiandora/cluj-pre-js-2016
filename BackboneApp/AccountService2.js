var usersJSON = '[{"userName":"combs","email":"kathycombs@quailcom.com","password":"orkman5951"},{"userName":"whitley","email":"kathywhitley@quailcom.com","password":"inson2079"},{"userName":"fletcher","email":"kathyfletcher@quailcom.com","password":"rederick8363"}]';


var usersFromParse = JSON.parse(usersJSON);
console.log(usersJSON);
 // for(var i = 0; i<=usersFromParse.length; i++){
 //  users.push( new Users(usersFromParse[i]) );
 // }

function Users(path){
  this.userName = path.userName;
  this.email = path.email;
  this.password = path.passowrd;
}

Users.prototype.getUserName = function(){
  return userName;
};

Users.prototype.getEmail = function(){
  return email;
};

Users.prototype.getPassword = function(){
  return password;
};

Users.prototype.setUserName = function(){
  this.userName = userName;
};

Users.prototype.setEmail = function(){
  this.email = email;
};

Users.prototype.setPassword = function(){
  this.password = password;
};


var currentUser =  new Users(usersFromParse);
function validateForm(){

  const eml = document.loginForm.email.value;
  const pwd = document.loginForm.password.value;
  localStorage.setItem("email", document.loginForm.email.value);
  localStorage.setItem("password", document.loginForm.password.value);


  for(var i = 0; i < usersFromParse.length; i++){
    if((eml == usersFromParse[i].localStorage.getItem("email")) && (pwd == usersFromParse[i].localStorage.getItem("password"))){
      window.location.assign = ("file:///home/dora.oroian/work/cluj-pre-js-2016/App/aplicatie.html");
      break;
    }
    else{
      window.alert("Login failed. Please check username, password or email.");
      break;
    }
  }
}

export{ validateForm };
