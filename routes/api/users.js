const express = require('express');
const router2 = express.Router();


const Users = require('../../models/Users');

//@route GET api/items
//@desc GET ALL Items
//@access Public
router2.get('/', (req,res) => {
    Users.find()
    .then(users => res.json(users))
});

//@route POST api/items
//@desc Create A Post
//@access Public
router2.post('/', (req,res) => {
    const newUsers = new Users({
        Name: req.body.Name,
        Last_Name: req.body.Last_Name,
        Email: req.body.Email,
        Password: req.body.Password
    })
    newUsers.save().then(user => res.json(user));
});


//@route DELETE api/items/:id
//@desc Delete A Item 
// @access Public

router2.delete('/:id', (req,res)=>{
    Users.findById(req.params.id)
    .then(users => users.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});

module.exports = router2;