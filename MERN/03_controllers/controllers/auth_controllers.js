const home = async (req,res) => {
    try {
        res.status(200).send("This is home page using controllers")
    } catch (error) {
        console.log("Error on home route")
    }
}

const about = async (req,res) => {
    try {
        res.status(200).send("This is about page using controllers")
    } catch (error) {
        console.log("Error on about route")
    }
}

module.exports = {home,about}