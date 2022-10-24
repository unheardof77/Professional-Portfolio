const $form = document.getElementById(`myForm`);
const $homeNav = document.getElementById(`homeNav`);

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

function navBarHandler (){
    console.log(`Happening`)
    const onPage = this.getAttribute(`data-activeState`);
    if(onPage){
        console.log(`true`)
    }else{
        console.log(`false`)
    };
};

$form.addEventListener(`submit`, formEventHandler);
