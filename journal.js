console.log('it works');
// list of entry 
const journal = [
  {title: "First blog letter",
  content: "Ut enim ad minima veniam, quis nostrum exercitationemullm corporis suscipit laboriosam, nisi ut what I can say is many thing but I don't know"},

  {title:"today was a good day",
  content: "Manythigs that I want to do but I could not done all of them. Though, I had the best time I've ecer had before today. It was time of succeful"},

  {title: "Another day at Onja",
  content: " It was a wonderful day, everyone was so happy. Party day. We've got a new students which is the seconde"},
  {title:"Enter your journal Email",
  content:""},
  {title:"Enter your entry content",
  content:""}
 ]

/* Function defining each user's choice */
  function listOfentry () {
    const choice = prompt("Welcome to my Onja journal! \nChoose (1) for listing all the entry \nChoose (2) for adding a new entry \nChoose (3) to quite \nChoose (4) deleted the first entry \nChoose (5) deleted a specific entry")
    if(choice === "1"){
      conditionset();
    }
    else if(choice === "2"){
      addnewjournal();
    }
    else if(choice === "3"){
      quit();
    }
    else if(choice === "4"){
      deleted();
    }
      
    else if(choice === "5"){
      deletedspecific();
    }
  }
// Function for all the condition
// First of the fuction, user want to to see all of the list of the journal.  
  function conditionset (){
    for(let i = 0; i < journal.length; i++){
        alert(`Title: ${journal[i].title} \n Content: ${journal[i].content}`);
    }
    listOfentry();
  }

//Second function, user want to enter a new journal.
  function addnewjournal(){
    let newjournalTitle = prompt(" Title: This is a news journal");
    let newjournalContent = prompt(" Content: This day is seems so dangerious, I would like to stay at hom ");
    journal.push([newjournalTitle, newjournalContent]);
    
  }
  listOfentry()

// Third fuction user want to quit the page.
  function quit(){
  alert(`Quit the page`);
  listOfentry()
  }

// Fourth fuction user want to delete the last of jurnal entry
  function deleted(){
  alert(`This will delet the last entry`)
  journal.pop();
  listOfentry()
  }

// Fith fuction user want to delete one specific entry on second list of object. 
  function deletedspecific(){
  alert(`This will delet specific entry`)
  journal.splice(1, 1);
  listOfentry()
  }
  




