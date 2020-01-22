const express = require('express');
const router = express.Router();
const Microcontroller = require('../models/microcontroller');

// Get all microcontrollers
router.get('/', async (req, res) => {
    try {
        const microcontroller = await Microcontroller.find();
        res.json(microcontroller);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:ucName', async (req, res) => {
    try {
        const microcontroller = await Microcontroller.find({ name: req.params.ucName });
        if (microcontroller.length === 0) {
            res.status(404).json({ message: 'There is no such microcontroller version.' })
        } else {
            res.json(microcontroller[0]);
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;