import { TestimonialesModel } from "../models/TestimonialesModel.js";

const guardarTestimonial = async (req, res) =>{

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if([nombre,mensaje.trim(),correo].includes('')){

        errores.push('Todos los campos son obligatorios');
    }

    if(errores.length > 0){

        // Consultar testimoniales existentes

        const testimoniales = await TestimonialesModel.findAll();

        res.render('testimoniales', {
            pagina:"Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })

    }else{

        try {
            
            await TestimonialesModel.create({nombre,correo,mensaje});

            res.redirect('/testimoniales');

        } catch (error) {

            console.log(error)
            
        }

    }


}

export { 
    guardarTestimonial
}