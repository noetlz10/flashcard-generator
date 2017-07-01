//basicCard constructor takes 2 arguments front and back
//values represent the text that appears on the front and the back of the new card
exports.BasicCard = function(front,back){
    this.front = front;
    this.back = back;
}

// ClozeCard constructor takes 2 arguments text and ClozeCard
//These values represent the full text and the cloze-deleted portion of the flashcard text.
exports.ClozeCard = function(text, cloze){
    //convert strings to lowercase
    var textLower = text.toLowerCase();
    var clozeLower = text.toLowerCase();

    //check cloze statement appears with the complete text
    if (!textLower.includes(clozeLower)){
        console.log("ERROR: cloze-deletion does not appear within full text -- <"+cloze+">");
        return;
    } 
    
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, "...");
}