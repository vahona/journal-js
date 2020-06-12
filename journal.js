console.log('it works');

const choice = prompt("Welcome to my Onja journal! \nChoose (1) for listing all the entry \nChoose (2) for adding a new entry \n Choose (3) to quite")

/* list of entry */
var journal = [
{ title:[ "First blog letter"],
content:[ "Ut enim ad minima veniam, quis nostrum exercitationemullm corporis suscipit laboriosam, nisi ut what I can say is many thing but I don't know"]},

 
    {title:["today was a good day"],
    content: ["Manythigs that I want to do but I could not done all of them. Though, I had the best time I've ecer had before today. It was time of succeful"]},

 { title: ["Another day at Onja"],
    content: [" It was a wonderful day, everyone was so happy. Party day. We've got a new students which is the seconde"]
},
    {title:["Enter your journal Email"],

},
{title:["Enter your entry content"]}
 ]
/* Function defining each user's choice */
//function listOfentry () {
  var haveChoosen = [];
  for(var i = 0; i < journal.length; i++){
      if(prompt === 1){
          haveChoosen = journal[i];
          var list = prompt("List of all the enry");
      };
      
      if(prompt === 2){
        haveChoosen.push({title, content}) 
        var add = prompt("Add a new entry")
      }
      
      if(prompt === 3){
          var quit = prompt("quit the page")
      }
  }
  /*
    while(){
        if(prompt === 1){
            haveChoosen = journal9([title, content]);
          
        };
       if(prompt === 2){
           function addEntry(title, content){
              
           }
           var haveChoosen = prompt("Add a new entry")
       }
       if(prompt === 3){
         var haveChoosen = prompt("quit the page")
       }
    }
    */
        
    
    




