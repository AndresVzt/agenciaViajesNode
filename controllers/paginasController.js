import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimonial.js';

const paginaInicio = async (req, res) => {
    // hacer un promise para ejecutar consultas al mismo tiempo 
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({limit:3}))
    promiseDB.push(Testimonial.findAll({limit:3}))
    try {
        const resultado = await Promise.all(promiseDB);
        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }


}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaPrueba = (req, res) => { 
    res.render('prueba', {
        pagina: 'Prueba'
    });
}
const paginaTesimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll();
    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
}
const paginaViajes = async  (req, res) => { 
    // Consultar BD 
    const viajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Próximos Viajes', 
        viajes,
    });
}


// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const {slug} = req.params;

    try {
        const resultado = await Viaje.findOne( { where : {slug} });

        res.render('viaje', {
            pagina: 'Información Viaje', 
            resultado
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaViajes, 
    paginaDetalleViaje,
    paginaPrueba,
    paginaTesimoniales
}