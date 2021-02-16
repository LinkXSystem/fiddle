const { ipcRenderer } = require('electron')

// prints "pong"
console.log(ipcRenderer.sendSync('synchronous-message', 'ping'))

// prints "pong"
ipcRenderer.on('asynchronous-reply', (_, ...args) => console.log(...args))

ipcRenderer.send('asynchronous-message', 'ping')
