const person = {
    name: "Eric",
    Job: "Software Engineer",
    Place: "Finland",
    greet: function(){
        console.log("I am "+ this.name + " living in " + this.Place + " and working as a " + this.Job );
    },
};

module.exports= person;