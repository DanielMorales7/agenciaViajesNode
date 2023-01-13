import { ViajesModel } from "../models/ViajesModel.js";
import { TestimonialesModel } from "../models/TestimonialesModel.js";

const paginaInicio = async (req, res) =>{

    // Utilizaremos un promise porque tener dos await, bloquea el seguno hasta que se ejecute el primero

    const promiseDB = [];

    promiseDB.push(ViajesModel.findAll({limit:3}));
    promiseDB.push(TestimonialesModel.findAll({limit:3}))

    try {

        const resultado = await Promise.all(promiseDB);
        
            res.render('inicio',{
                pagina:'Inicio',
                clase: 'home',
                viajes: resultado[0],
                testimoniales: resultado[1]
            })

    } catch (error) {
        
        console.log(error)
    }
    

    
}

const paginaNosotros = async ( req, res) => {

    

    const viajes = await ViajesModel.findAll();

    res.render('nosotros', {
        pagina :'Nosotros',
        viajes
    }); // res.send -> envía un dato
}

const paginaViajes =  async (req, res) => {

    //consultar BD

    const viajes = await ViajesModel.findAll();

    res.render('viajes', {
        pagina:'Próximos viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        
        const testimoniales = await TestimonialesModel.findAll();
        
        res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        })

    } catch (error) {
     
        console.log(error);
        
    }
    

}

const paginaDetalleViaje = async (req, res) => {

    const {slug} = req.params;

    try {

        const resultado = await ViajesModel.findOne({ where: { slug } });

        res.render('detalleViaje', {
            pagina: 'Información Viaje',
            resultado
        })
    
        
    } catch (error) {
        console.log(error)
    }

}



export { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
}