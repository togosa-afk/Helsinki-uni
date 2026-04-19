const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


const corsOption = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

// app.use(morgan('tiny'));
app.use(express.json())
app.use(cors(corsOption))

morgan.token('body' , (request , response) => {
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}


app.get('/' , (request , response ) => {
  response.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (request , response) => {
  response.json(notes)
})

app.get('/api/notes/:id' , (request , response) => {
  const id = request.params.id
  const note = notes.find(n => n.id === id )
  if (note) {
      response.json(note)
  } else {
      response.status(404).end('')
  }
})

app.delete('/api/notes/:id' , (request , response) => {
  const id = request.params.id
  notes = notes.filter(n => n.id !== id )
  response.status(204).end()
})

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0

  return String(maxId+1)
}


app.post('/api/notes/',(request, response) => {

  const body = request.body

  if(!body.content){
    return response.status(400).json({
      "error" : 'content missing'
    })
  }

  const note = {
    content: body.content,
    important: body.important || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

app.patch('/api/notes/:id', (request, response) => {
  const id = request.params.id;
  const body = request.body;

  const noteIndex = notes.findIndex(n => n.id === id);
  if (noteIndex === -1) {
    return response.status(404).json({ error: 'Note not found' });
  }

  // Update only provided fields
  const updatedNote = {
    ...notes[noteIndex],
    ...body
  };
  notes[noteIndex] = updatedNote;
  response.json(updatedNote);
});

const PORT = process.env.PORT || 3001;

app.listen(PORT)

console.log(`the server is running on port ${PORT}`)