import express from 'express';
import { guardarTestimonial } from '../controllers/testimonialController.js';
import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje, 
    } 
from '../controllers/paginasControllers.js';

const router = express.Router();

router.get('/', paginaInicio); // res.send -> envía un dato

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes );

router.get('/viajes/:slug', paginaDetalleViaje );

router.route('/testimoniales')
    .get(paginaTestimoniales)
    .post(guardarTestimonial)


export default router;