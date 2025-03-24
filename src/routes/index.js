const express = require('express');

const usuarioRoutes = require('./UsuarioRoutes.js');
const clienteTallerRoutes = require('./ClienteTallerRoutes.js');
const tallerRoutes = require('./TallerRoutes.js');
const procesoRoutes = require('./ProcesoRoutes.js');
const tallerprocesoRoutes = require('./TallerProcesoRoutes.js');
const pedidoRoutes = require('./PedidoRoutes.js');
const cotizacionRoutes = require('./CotizacionRoutes.js');
const clienteplataformaRoutes = require('./ClientePlataformaRoutes.js');
const administradorRoutes = require('./AdministradorRoutes.js');
const calificacionRoutes = require('./CalificacionRoutes.js');
const pagoRoutes = require('./PagoRoutes.js');
const comprobanteRoutes = require('./ComprobanteRoutes.js');
const entregaRoutes = require('./EntregaRoutes.js');
const impresionRoutes = require('./ImpresionRoutes.js');
const manufacturaRoutes= require('./ManufacturaMetalMecanicaRoutes.js');
const procesoimpresionRoutes= require('./ProcesoImpresionRoutes.js');
const procesomanufacturaRoutes= require('./ProcesoManufacturaRoutes.js');
const otrosRoutes= require('./OtrosRoutes.js');
const procesootrosRoutes= require('./ProcesoOtrosRoutes.js');

const routes = (app) => {
    app.use(express.json());
    app.use('/api', usuarioRoutes);
    app.use('/api', clienteTallerRoutes);
    app.use('/api', tallerRoutes);
    app.use('/api', procesoRoutes);
    app.use('/api', tallerprocesoRoutes);
    app.use('/api', pedidoRoutes);
    app.use('/api', cotizacionRoutes);
    app.use('/api', clienteplataformaRoutes);
    app.use('/api', administradorRoutes);
    app.use('/api', calificacionRoutes);
    app.use('/api', pagoRoutes);
    app.use('/api', comprobanteRoutes);
    app.use('/api', entregaRoutes);
    app.use('/api', impresionRoutes);
    app.use('/api', manufacturaRoutes);
    app.use('/api', procesoimpresionRoutes);
    app.use('/api', procesomanufacturaRoutes);
    app.use('/api', otrosRoutes);
    app.use('/api', procesootrosRoutes);
};

module.exports = routes;
