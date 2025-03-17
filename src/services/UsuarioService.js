class UsuarioService {
    constructor(usuarioRepository) {
      this.usuarioRepository = usuarioRepository;
    }
  
    async getAllUsuarios() {
      return await this.usuarioRepository.getAllUsuarios();
    }
  
    async getUsuarioById(id) {
      return await this.usuarioRepository.getUsuarioById(id);
    }
  
    async createUsuario(usuarioData) {
      const usuarioExistente = await this.usuarioRepository.getByEmail(usuarioData.email);
      if (usuarioExistente) throw new Error('El correo ya está registrado.');
      return await this.usuarioRepository.createUsuario(usuarioData);
    }
  
    async updateUsuario(id, updatedData) {
      return await this.usuarioRepository.updateUsuario(id, updatedData);
    }
  
    async deleteUsuario(id) {
      return await this.usuarioRepository.deleteUsuario(id);
    }
  }
  
  module.exports = UsuarioService;