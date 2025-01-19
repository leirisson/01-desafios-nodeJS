import http from 'node:http'

const PORT = 3333

const server = http.createServer((req, res) => {
  res.writeHead(200).end('api de cadastro de tarfas')
})

server.listen(PORT, () => {
  console.log(`Servidor  rodando na  http://localhost:${PORT}`)
})
