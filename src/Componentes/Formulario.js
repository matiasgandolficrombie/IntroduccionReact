import React, { useState } from 'react';
import TarjetaPresentacion from './TarjetaPresentacion';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    descripcion: ''
  });

  /*
    Definimos el estado submitted para controlar el formulario enviado
      submitted: es la variablaes
      setSubmitted: funcion utilizada para controlar el estado de la variable
  */
  const [submitted, setSubmitted] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   // Evitamos que la página se recargue al enviar el formulario
    setSubmitted(true);   // Marcamos el formulario como enviado
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido:</label>
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submitted && <TarjetaPresentacion formData={formData} />}
    </div>
  );
};

export default Formulario;
