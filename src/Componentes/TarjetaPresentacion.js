import React from 'react';

const TarjetaPresentacion = ({ formData }) => {
  return (
    <div className="tarjeta">
      <h2>Tarjeta de Presentación</h2>
      <p><strong>Nombre:</strong> {formData.nombre}</p>
      <p><strong>Apellido:</strong> {formData.apellido}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Teléfono:</strong> {formData.telefono}</p>
      <p><strong>Descripción:</strong> {formData.descripcion}</p>
    </div>
  );
};

export default TarjetaPresentacion;
