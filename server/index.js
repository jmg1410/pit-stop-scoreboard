const express = require('express');
const http = require('http');
const {  Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
})

app.use(cors());

app.get('/', (req, res) => {
    res.send('Socket.io server is running')
})

io.on('connection',(socket) => {
    console.log('🎮 A player connected:', socket.id);
    socket.on('test-message', (data) => {
        console.log('📨 Received test-message:', data)
    })
    socket.on('disconnect', () => {
        console.log('🚪 A player disconnected:', socket.id)
    })
})

const PORT = 5050;
server.listen(PORT, () => {
    console.log(`🔥 Socket.io server listening on http://localhost:${PORT}`)
})