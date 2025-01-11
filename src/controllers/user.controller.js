exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
}

exports.userRegistered = (req, res) => {
    res.status(200).send("User Content.");
}

exports.adminRegistered = (req, res) => {
    res.status(200).send("Admin Content.");
}

exports.moderatorRegistered = (req, res) => {
    res.status(200).send("Moderator Content.");
}