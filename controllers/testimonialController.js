import { Testimonial } from "../models/Testimonial.js"
const guardarTestimonial = async(req, res) => {
    const{nombre, email, mensaje} = req.body
    const errores = []
    if(nombre.trim()===''){
        errores.push({nombre:'El nombre está vacio'})
    }
    if(email.trim()===''){
        errores.push({email:'El email está vacio'})
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:'El mensaje está vacio'})
    }
    if(errores.length > 0) {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina:'Testimoniales',
            errores,
            nombre,
            email,
            mensaje,
            testimoniales
        })
    }else{
        //registrar el testimonial
        try {
            await Testimonial.create({
                nombre,
                email,
                mensaje
            })
            res.redirect('/testimoniales')
        } catch (error) {
            console.log(error)
        }

    }
}

export {
    guardarTestimonial
}