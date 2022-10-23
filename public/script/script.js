const $form = document.getElementById(`myForm`);

//emailjs.init(process.env.PUBLICKEY);

// async function formEventHandler(e){
//     e.preventDefault();
//     const serviceID = process.env.SERVICEID;
//     const templateID = process.env.TEMPLATEID;
//     try{
//         const result = await emailjs.sendForm(serviceID, templateID, this)
//         console.log(result.status, result.text);
//     } catch(err){
//         console.error(err)
//     }
// };



const formEventHandler = (e) =>{
    e.preventDefault();
    
    emailjs.sendForm("service_9571myr", "template_geeql87", $form, "zZGqbnRDfc_-XUYES")
    .then((res)=>{
        console.log(res.text);
    }, (err) =>{
        console.error(err);
    })
    e.target.reset();
};
$form.addEventListener(`submit`, formEventHandler)