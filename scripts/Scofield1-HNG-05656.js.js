function taskTwo(name,intershipID,email, language){
    this.name = name;
    this.intershipID = intershipID;
    this.email = email;
    this.language = language;
    
    this.detail = function(){
        return "Hello World, this is " + this.name + " with " + this.intershipID + " and  email " + this.email + " using " + this.language + " for stage 2 task"
    }
}

var task = new taskTwo ("Abdulrauf Abiodun","HNG-05656","adebayoabdulrauf1@gmail.com","JavaScript");


console.log(task.detail());