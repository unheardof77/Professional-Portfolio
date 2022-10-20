const router = require(`express`).Router();
const path = require(`path`);


router.get(`/contactme`, (req, res) =>{
    res.sendFile(path.join(__dirname, `../../public/contactMe.html`))
})
router.get(`/about`, (req, res) =>{
    res.sendFile(path.join(__dirname, `../../public/about.html`))
})
router.get(`/projects`, (req, res) =>{
    res.sendFile(path.join(__dirname, `../../public/projects.html`))
})
router.get(`/`, (req, res) =>{
    res.sendFile(path.join(__dirname, `../../public/home.html`))
})

module.exports = router;