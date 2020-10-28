const mongoose = require("mongoose")
const budgetModel = require("./budget_schema")

let url = 'mongodb://localhost:27017/myBudget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database.")
            // List all entries
            budgetModel.find({})
                    .then((data) => {
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError) => {
                        console.log(connectionError)
                    })

            //let newData = new budgetModel({id: 13, name: "Testing mongoose"})
            // budgetModel.insertMany(newData)
            //     .then((data) => {
            //         console.log(data)
            //         mongoose.connection.close()
            //     })
            //     .catch((connectionError) => {
            //         console.log(connectionError)
            //      })

            })