const fs  = require('fs')
const chalk = require('chalk')

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    debugger
    if(!duplicateNote) {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new  note added'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note1 => note1.title === title)
    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const filteredNotes = notes.filter(note => note.title !== title)
    if(notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse('Note Removed'))
        saveNotes(filteredNotes)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(note => {
        console.log(note.title);
    });

}

const saveNotes =  (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJson)
}

const loadNotes =  () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e) {
        return []
    }
    
}

module.exports = {addNote,removeNote,listNotes,readNote}