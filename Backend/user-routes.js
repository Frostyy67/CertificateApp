import { Router } from 'express';
import { readIdFromDB, storeToDB } from './utils.js';
var router = Router();
const certDetails = new Map();

router.get('/', (req, res) => {
    res.send("Hello World");
})

router.post('/issue', async (req, res) => {
    try {
        const { certificateID, courseName, candidateName, grade, date } = req.body;
        console.log(certificateID);
        const d = await readIdFromDB(certificateID);
        if (d) {
            res.status(201).json({ message: `${certificateID} already exist` })
        }
        else {
            await storeToDB({id: certificateID, courseName, candidateName, grade, date });
            console.log((certificateID));
            res.status(201).json({ message: 'Certificate details saved' })
        } 
    } catch (error) {
        console.log(error);
        res.status(500).json();
    }
})

router.get('/view/:id', async (req, res) => {
    const certId = req.params.id;
    const det =await readIdFromDB(certId);
    console.log(det);
    res.status(201).json(det);

})

export default router;
