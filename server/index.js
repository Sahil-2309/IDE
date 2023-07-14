const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 3000
app.use(cors())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'admin' && password === 'password') {
    res.status(200).json({ message: 'Login successful' })
  } else {
    res.status(401).json({ message: 'Invalid username or password' })
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
