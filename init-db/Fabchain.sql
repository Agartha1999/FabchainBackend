CREATE DATABASE FabChain3;

USE FabChain3;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

CREATE TABLE Cliente_Taller (
    idClienteTaller INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    ruc VARCHAR(50),
    dni VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Administrador (
    idAdministrador INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Cliente_Plataforma (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    ruc VARCHAR(50),
    dni VARCHAR(50),
    pasaporte VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Taller (
    idTaller INT PRIMARY KEY AUTO_INCREMENT,
    idClienteTaller INT NOT NULL,
    capacidad INT NOT NULL,
    contacto VARCHAR(100) NOT NULL,
    ruc VARCHAR(50),
    dniPasaporte VARCHAR(50),
    estado ENUM('Pendiente', 'Verificado', 'Rechazado') NOT NULL,
    FOREIGN KEY (idClienteTaller) REFERENCES Cliente_Taller(idClienteTaller)
);

CREATE TABLE Proceso (
    idProceso INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    detallarHerramientas TEXT
);

CREATE TABLE Impresion (
    idImpresion INT PRIMARY KEY AUTO_INCREMENT,
    materiales VARCHAR(255),
    tipoImpresora VARCHAR(255),
    detallarHerramientas TEXT
);

CREATE TABLE ManufacturaMetalMecanica (
    idManufactura INT PRIMARY KEY AUTO_INCREMENT,
    herramientas VARCHAR(255),
    procesosEspeciales VARCHAR(255),
    detallarHerramientas TEXT
);

CREATE TABLE Otros (
    idOtro INT PRIMARY KEY AUTO_INCREMENT,
    descripcionPersonalizada VARCHAR(255),
    detallarHerramientas TEXT
);

CREATE TABLE Pedido (
    idPedido INT PRIMARY KEY AUTO_INCREMENT,
    idProceso INT NOT NULL UNIQUE,
    idTaller INT NOT NULL,
    detalle TEXT NOT NULL,
    cantidad INT NOT NULL,
    estado ENUM('Pendiente', 'En Progreso', 'Completado') NOT NULL,
    fechaSolicitud DATE NOT NULL,
    fechaLimite DATE,
    numeroOrden VARCHAR(50),
    planoPDF VARCHAR(255),
    planoCAD3D VARCHAR(255),
    cotizacion VARCHAR(255),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idTaller) REFERENCES Taller(idTaller)
);

CREATE TABLE Pago (
    idPago INT PRIMARY KEY AUTO_INCREMENT,
    idTaller INT NOT NULL,
    idPedido INT NOT NULL,
    monto FLOAT NOT NULL,
    estado ENUM('Pendiente', 'Completado', 'Fallido') NOT NULL,
    fechaPago DATE NOT NULL,
    metodoPago VARCHAR(255) NOT NULL,
    FOREIGN KEY (idTaller) REFERENCES Taller(idTaller),
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

CREATE TABLE Cotizacion (
    idPedido INT PRIMARY KEY,
    precioUnitario FLOAT NOT NULL,
    precioTotal FLOAT NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

CREATE TABLE Comprobante (
    idComprobante INT PRIMARY KEY AUTO_INCREMENT,
    idPago INT NOT NULL,
    idPedido INT NOT NULL,
    fechaEmision DATE NOT NULL,
    detalles TEXT,
    montoTotal FLOAT NOT NULL,
    FOREIGN KEY (idPago) REFERENCES Pago(idPago),
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

CREATE TABLE Entrega (
    idEntrega INT PRIMARY KEY AUTO_INCREMENT,
    idPedido INT NOT NULL,
    fechaEntrega DATE NOT NULL,
    detalles TEXT,
    estado ENUM('Pendiente', 'Validado', 'Rechazado') NOT NULL,
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

CREATE TABLE Calificacion (
    idEntrega INT PRIMARY KEY,
    calificacion VARCHAR(50) NOT NULL,
    FOREIGN KEY (idEntrega) REFERENCES Entrega(idEntrega)
);

-- Relaciones entre Taller y Procesos
CREATE TABLE Taller_Proceso (
    idTaller INT,
    idProceso INT,
    PRIMARY KEY (idTaller, idProceso),
    FOREIGN KEY (idTaller) REFERENCES Taller(idTaller),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso)
);

-- Relaciones entre Proceso e Impresión, Manufactura, Otros
CREATE TABLE Proceso_Impresion (
    idProceso INT,
    idImpresion INT,
    PRIMARY KEY (idProceso, idImpresion),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idImpresion) REFERENCES Impresion(idImpresion)
);

CREATE TABLE Proceso_Manufactura (
    idProceso INT,
    idManufactura INT,
    PRIMARY KEY (idProceso, idManufactura),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idManufactura) REFERENCES ManufacturaMetalMecanica(idManufactura)
);

CREATE TABLE Proceso_Otros (
    idProceso INT,
    idOtro INT,
    PRIMARY KEY (idProceso, idOtro),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idOtro) REFERENCES Otros(idOtro)
);
