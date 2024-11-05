class Note {
    
    constructor(id, title, text){
    this.id = id; 
    this.title = title; 
    this.text = text; 
    }
    }
     
    class App {
    constructor(){
    this.notes = [];
    
    this.$activeForm = document.querySelector(".active-form");
    this.$activeForm.computedStyleMap.display = "block"
    console.log(this.$activeForm); 

    this.addEventListeners ();
    }
    
    addEventListeners(){
        document.body.addEventListener("click",(event) =>{
           this.handleFormClick(event);
        })
    }   
     handleFormClick(event) {
     console.log(event);
    }

    addNote(id, { title, text }) {
    const newNote = new Note(id, title, text);
    this.notes = [...this.notes, newNote]; 
    }
    
    editNote(id, { title, text }) {
    this.notes = this.notes.map(note => {
    if(note.id === id) { 
    note.title = title; 
    note.text = text; 
    }
    return note; 
    });
    }
   
    deleteNote(id) {
    this.notes = this.notes.filter(note => note.id !== id); 
    }
   
    displayNotes() {
    this.notes.forEach(note => console.log(`
    ID: ${note.id}
    Title: ${note.title}
    Text: ${note.text}
    
    `)); 
    }
    }
    
    const app = new App();
    
    