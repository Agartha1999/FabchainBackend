CREATE DATABASE FabChain3;

USE FabChain3;

CREATE TABLE Usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

INSERT INTO Usuario (email, password, rol) VALUES
('airam.raven98@gmail.com', '123456', 'administrador'),
('raven@example.com', '12345', 'admin');

CREATE TABLE Cliente_Taller (
    idClienteTaller INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    ruc VARCHAR(50),
    dni VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Cliente_Taller (idUsuario, nombre, ruc, dni) VALUES
(1, 'Taller A', '2145656789', '74244030'),
(2, 'Taller B', '2145656790', '74244031');

CREATE TABLE Administrador (
    idAdministrador INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Administrador (idUsuario, nombre) VALUES
(1, 'Johana');

CREATE TABLE Cliente_Plataforma (
    idCliente INT PRIMARY KEY AUTO_INCREMENT,
    idUsuario INT NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    ruc VARCHAR(50),
    dni VARCHAR(50),
    pasaporte VARCHAR(50),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

INSERT INTO Cliente_Plataforma (idUsuario, nombre, ruc, dni, pasaporte) VALUES
(1, 'Cliente A', '2145656789', '74244030', 'ABC123'),
(2, 'Cliente B', '2145656790', '74244031', 'XYZ456');

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

INSERT INTO Taller (idClienteTaller, capacidad, contacto, estado, ruc, dniPasaporte) VALUES
(1, 5, '918460801', 'Pendiente', '2145656789', '74244030'),
(2, 10, '918460802', 'Verificado', '2145656790', '74244031');

CREATE TABLE Proceso (
    idProceso INT PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(255) NOT NULL,
    detallarHerramientas TEXT
);

INSERT INTO Proceso (descripcion, detallarHerramientas) VALUES
('Proceso de producción', 'Usamos herramientas A y B'),
('Proceso de ensamblaje', 'Se requiere soldadura');

CREATE TABLE Impresion (
    idImpresion INT PRIMARY KEY AUTO_INCREMENT,
    materiales VARCHAR(255),
    tipoImpresora VARCHAR(255),
    detallarHerramientas TEXT
);

INSERT INTO Impresion (materiales, tipoImpresora, detallarHerramientas) VALUES
('Material A', 'Impresora 1', 'Detalles de impresión A'),
('Material B', 'Impresora 2', 'Detalles de impresión B');

CREATE TABLE ManufacturaMetalMecanica (
    idManufactura INT PRIMARY KEY AUTO_INCREMENT,
    herramientas VARCHAR(255),
    procesosEspeciales VARCHAR(255),
    detallarHerramientas TEXT
);

INSERT INTO ManufacturaMetalMecanica (herramientas, procesosEspeciales, detallarHerramientas) VALUES
('Herramienta 1', 'Proceso A', 'Detalles de manufactura A'),
('Herramienta 2', 'Proceso B', 'Detalles de manufactura B');

CREATE TABLE Otros (
    idOtro INT PRIMARY KEY AUTO_INCREMENT,
    descripcionPersonalizada VARCHAR(255),
    detallarHerramientas TEXT
);

INSERT INTO Otros (descripcionPersonalizada, detallarHerramientas) VALUES
('Otro proceso', 'Detalles de otro A'),
('Otro proceso B', 'Detalles de otro B');

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

INSERT INTO Pedido (idProceso, idTaller, detalle, cantidad, estado, fechaSolicitud, fechaLimite, numeroOrden, planoPDF, planoCAD3D, cotizacion) VALUES
(1, 1, 'Detalle del pedido 1', 10, 'Pendiente', '2025-03-25', '2025-04-25', 'ORD001', 'plano1.pdf', 'plano1.cad', 'cotizacion1.pdf'),
(2, 2, 'Detalle del pedido 2', 5, 'En Progreso', '2025-03-26', '2025-04-26', 'ORD002', 'plano2.pdf', 'plano2.cad', 'cotizacion2.pdf');

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

INSERT INTO Pago (idTaller, idPedido, monto, estado, fechaPago, metodoPago) VALUES
(1, 1, 250.0, 'Completado', '2025-03-24', 'visa'),
(2, 2, 500.0, 'Pendiente', '2025-03-26', 'mastercard');

CREATE TABLE Cotizacion (
    idPedido INT PRIMARY KEY,
    precioUnitario FLOAT NOT NULL,
    precioTotal FLOAT NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

INSERT INTO Cotizacion (idPedido, precioUnitario, precioTotal, descripcion) VALUES
(1, 20.0, 200.0, 'Descripción A'),
(2, 30.0, 150.0, 'Descripción B');

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

INSERT INTO Comprobante (idPago, idPedido, fechaEmision, detalles, montoTotal) VALUES
(1, 1, '2025-03-24', 'Detalles A', 250.0),
(2, 2, '2025-03-26', 'Detalles B', 500.0);

CREATE TABLE Entrega (
    idEntrega INT PRIMARY KEY AUTO_INCREMENT,
    idPedido INT NOT NULL,
    fechaEntrega DATE NOT NULL,
    detalles TEXT,
    estado ENUM('Pendiente', 'Validado', 'Rechazado') NOT NULL,
    FOREIGN KEY (idPedido) REFERENCES Pedido(idPedido)
);

INSERT INTO Entrega (idPedido, fechaEntrega, detalles, estado) VALUES
(1, '2025-03-25', 'Entrega A', 'Pendiente'),
(2, '2025-03-27', 'Entrega B', 'Validado');

CREATE TABLE Calificacion (
    idEntrega INT PRIMARY KEY,
    calificacion VARCHAR(50) NOT NULL,
    FOREIGN KEY (idEntrega) REFERENCES Entrega(idEntrega)
);

INSERT INTO Calificacion (idEntrega, calificacion) VALUES
(1, '5'),
(2, '4');

-- Relaciones entre Taller y Procesos
CREATE TABLE Taller_Proceso (
    idTaller INT,
    idProceso INT,
    PRIMARY KEY (idTaller, idProceso),
    FOREIGN KEY (idTaller) REFERENCES Taller(idTaller),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso)
);

INSERT INTO Taller_Proceso (idTaller, idProceso) VALUES
(1, 1),
(2, 2);

-- Relaciones entre Proceso e Impresión, Manufactura, Otros
CREATE TABLE Proceso_Impresion (
    idProceso INT,
    idImpresion INT,
    PRIMARY KEY (idProceso, idImpresion),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idImpresion) REFERENCES Impresion(idImpresion)
);

INSERT INTO Proceso_Impresion (idProceso, idImpresion) VALUES
(1, 1),
(2, 2);

CREATE TABLE Proceso_Manufactura (
    idProceso INT,
    idManufactura INT,
    PRIMARY KEY (idProceso, idManufactura),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idManufactura) REFERENCES ManufacturaMetalMecanica(idManufactura)
);

INSERT INTO Proceso_Manufactura (idProceso, idManufactura) VALUES
(1, 1),
(2, 2);

CREATE TABLE Proceso_Otros (
    idProceso INT,
    idOtro INT,
    PRIMARY KEY (idProceso, idOtro),
    FOREIGN KEY (idProceso) REFERENCES Proceso(idProceso),
    FOREIGN KEY (idOtro) REFERENCES Otros(idOtro)
);

INSERT INTO Proceso_Otros (idProceso, idOtro) VALUES
(1, 1),
(2, 2);
