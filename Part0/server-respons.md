browser and server
task 0.4

browser -> server post https://studies.cs.helsinki.fi/exampleapp/new_note
activate server
server -> browser HTTP 302 redirect
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server -> browser HTML Documnt
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server -> browser CSS File
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server -> browser  Javascript file
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server -> browser  [{ "content": "welcome to you", "date": "2023-1-1" }, ... ]
deactivate server



SPA pages 
task 0.5

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server -> browser HTML Documnt
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server -> browser CSS File
deactivate server

browser -> server GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server -> browser  Javascript file
deactivate server


SPA pages
task 0.6 

browser -> server POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
activate server
server -> browser  HTML 201 created
deactivate server