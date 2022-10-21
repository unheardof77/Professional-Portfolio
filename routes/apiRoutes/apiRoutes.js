const router = require(`express`).Router();
const path = require(`path`);
router.post(`/`, (req, res) =>{
    console.log(req);
    
    return res.sendFile(path.join(__dirname, `../../public/contactMe.html`));
})

module.exports = router;