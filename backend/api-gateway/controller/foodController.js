const getInfo = (req, res) => {
    res.send("Retrieving UserID, location, budget, and the time that the user have");
};

const postPic = (req, res) => {
    res.send("Posting picture");
};

const getRank = (req, res) => {
    res.send("Retrieving the total score")
}

module.exports = {
    getInfo,
    postPic,
    getRank
}