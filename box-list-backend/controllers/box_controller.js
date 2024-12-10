const db = require('../db_config/db_connection')


exports.insertSquare = async (req, res) => {
    let { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    else {
        var insertData = `INSERT INTO squares (title)
        VALUES (?);`;
        db.query(insertData, [title], function (err, data) {
            if (err) {
                res.json({
                    status: false,
                    message: "Error in inserting data"
                })
            } else {
                res.json({
                    status: true,
                    message: "Data is added"
                })
            }
        })
    }

}

exports.getAllSquares = async (req, res) => {
    var getData = `SELECT * FROM squares`
    db.query(getData, function (err, data) {
        if (err) {
            res.json({
                status: false,
                message: "Error in fetching data"
            })
        } else {
            res.json({
                status: true,
                message: "Data found",
                result: data
            })
        }
    })
}

exports.getSingleSquare = async (req, res) => {
    let id = req.params.id
    var getData = `SELECT * FROM squares WHERE id = ${id}`
    db.query(getData, function (err, data) {
        if (err) {
            res.json({
                status: false,
                message: "Error in fetching data"
            })
        } else {
            res.json({
                status: true,
                message: "Data found",
                result: data
            })
        }
    })
}

exports.deleteSquare = async (req, res) => {
    let id = req.params.id
    var deleteData = `DELETE FROM squares WHERE id = ${id}`
    db.query(deleteData, function (err, data) {
        if (err) {
            res.json({
                status: false,
                message: "Error in deleting data"
            })
        } else {
            res.json({
                status: true,
                message: "Data deleted",
            })
        }
    })
}