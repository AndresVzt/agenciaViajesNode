import express from 'express';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes,
    paginaDetalleViaje,
    paginaPrueba,
    paginaTesimoniales
} from '../controllers/paginasController.js';

import { guardarTestimonial } from '../controllers/testimonialController.js';


const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/testimoniales', paginaTesimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/prueba', paginaPrueba);

export default router;