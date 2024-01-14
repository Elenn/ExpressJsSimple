//const express= require('express')

//const app = express() 

//app.get('/', (req, res) => {
 //  res.send('This is home page')
//})

//app.get('/user/:username/:id', (req, res) => {
//   res.send(`User ID" ${req.params.id}. Username: ${req.params.username}`)
//})

//const PORT = 3000

//app.listen(PORT, () => {
  // console.log(`Server started: http://localhost:${PORT}`)
//}) 
//------------------------------------
const express= require('express')

const app = express()

app.set('view engine', 'ejs') // настраиваем, что будем использовать шаблонизатор ejs
app.use(express.urlencoded({ extended: false})) // что бы могли получать данные из форм
app.use(express.static ('public'))

app.get('/', (req, res) => {
   res.render('index')
})

app.get('/about', (req, res) => {
   res.render('about')
})

app.get('/user/:username', (req, res) => {
   let data = {username: req.params.username, hobbies: ['Footbal', 'Skate', 'basketball']}
   res.render('user', data)
})

app.post('/check-user', (req, res) => {
    console.log(req.body)
	let username = req.body.username
	if(username == "") 
		return res.redirect('/')
	else
		return res.redirect('/user/' + username)
})

const PORT = 3000

app.listen(PORT, () => {
   console.log(`Server started: http://localhost:${PORT}`)
}) 