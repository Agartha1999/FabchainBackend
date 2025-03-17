const UsuarioRepository = require('../repositories/UsuarioRepository');
const UsuarioService = require('../services/UsuarioService');

const createUsuarioService = () => {
  const usuarioRepository = new UsuarioRepository();
  return new UsuarioService(usuarioRepository);
};

module.exports = createUsuarioService;