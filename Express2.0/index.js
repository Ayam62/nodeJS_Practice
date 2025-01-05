const express = require('express')
const app = express()
const port = 3000

app.set("view engine","ejs")

app.get('/', (req, res) => {
    //think this came from database
    let siteName="Adidas"
    let searchText="Search Now"
    let arr=[1,2,3,4,5,6]
  res.render("index",{siteName,searchText,arr})//starts from this dirname
})

app.get('/blogs/:slug', (req, res) => {
    //think this came from database
    let blogTitle="Address why and when?"
    let blogContent="its a very good brand"
  res.render("blogpost",{blogTitle:blogTitle,
    blogContent:blogContent
  })//injects these variables in index.html, these variables are from database(imagine  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})