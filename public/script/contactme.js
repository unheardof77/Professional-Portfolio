const $form = document.getElementById(`myForm`);

// emailjs.init(process.env.PUBLICKEY);

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


// $form.addEventListener(`submit`, (e)=>{e.preventDefault()})