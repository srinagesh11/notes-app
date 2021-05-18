const val = require('validator')
const chalk = require('chalk')
const yargs = require('yargs');
const notes = require('./notes.js');
yargs.version("1.1.0");

yargs.command({
    command:"add",
    describe: "This is used to add a new note",
    builder: {
        title : {
            describe:'Note Tile',
            demandOption: true,
            type : 'string'
        },
        body : {
            describe:'Description Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: "remove",
    describe:"This is used to remove a note",
    builder: {
        title : {
            describe:'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: (argv)  => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe:"Listing the notes",
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command:"read",
    describe:"This is used to read the note",
    builder: {
        title : {
            describe:'Read title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})
yargs.parse()