const mongoose = require("mongoose")
const namesModel = require("./models/budget_schema")

let url = 'mongodb://localhost:27017/myBudget';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database.")
            // List all entries
            namesModel.find({})
                    .then((data) => {
                        console.log(data)
                        mongoose.connection.close()
                    })
                    .catch((connectionError) => {
                        console.log(connectionError)
                    })

            // let newData = new namesModel({id: 13, name: "Testing mongoose"})
            //     namesModel.insertMany(newData)
            //         .then((data) => {
            //             console.log(data)
            //             mongoose.connection.close()
            //         })
            //         .catch((connectionError) => {
            //             console.log(connectionError)
            //         })
        })