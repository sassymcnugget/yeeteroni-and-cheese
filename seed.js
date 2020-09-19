const db = require('./models')
const data = require('./userData.json')

db.User.deleteMany({}, (err, deletedUsers) => {
     db.User.create(data.users, (err, createdUsers) => {
          if (err) console.log(`seeding error: ${err}`)
          console.log("seeding successful")
          console.log(createdUsers)
          process.exit()
     })
})