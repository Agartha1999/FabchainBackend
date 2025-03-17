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
};

module.exports = routes;
