var contacts = [
    {
        "fistName" : "Akira",
        "lastName" :"Laine",
        "number" : "76276355",
        "likes" : ["pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName" : "Sherlock",
        "lastName" : "Holmes",
        "number" : "7677786",
        "likes" : ["Intriguing Cases", "Violin"]
    },
    {
        "firstName" : "Harry",
        "lastName" : "Potter",
        "number" : "0902838667",
        "likes" : ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName" : "Kristian",
        "lastName" : "Vos",
        "number" : "7543673",
        "likes" : ["Javascript", "Gaming", "Foxes"]
    }
    
     function LookUpProfile(name,Prop){
        for(var i=0; i<contacts.length; i++){
            if(contrast[i].firstName === name){
                return contact[i][prop] || "No such prop";
            }
        }
        return "No such contact";
    }
    var data = LookUpProfile("Akira", "likes")
    console.log(data)
]