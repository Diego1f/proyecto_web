import React, { useState, useEffect } from 'react';

// Componente Header
const Header = () => {
  return (
    <header className="header">
      <div className="centrar_texto">
        <h1>Drum Masters</h1>
        <div className="recuadro">
          <p>
            Detrás de cada gran canción que hace vibrar tu alma, hay un guerrero del ritmo marcando el pulso. 
            Los bateristas son los arquitectos invisibles de la música, los alquimistas que transforman golpes 
            en emoción y caos en orden. Pero antes de empezar este breve viaje por favor{' '}
            <a 
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Toca aquí
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

// Componente BateristaCard
const BateristaCard = ({ nombre, imagen, descripcion, videoUrl }) => {
  return (
    <section className="recuadro">
      <h2>{nombre}</h2>
      <img src={imagen} alt={nombre} className="img-baterista" />
      <p>{descripcion}</p>
      <a href={videoUrl} target="_blank" rel="noopener noreferrer">
        Ver aquí
      </a>
    </section>
  );
};

// Componente FormularioVotacion
const FormularioVotacion = ({ onVotoSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    baterista: ''
  });
  const [error, setError] = useState('');

  const bateristas = [
    'John Bonham',
    'Keith Moon', 
    'Jeff Porcaro',
    'Neil Peart',
    'Stewart Copeland',
    'Nick Mason',
    'Gavin Harrison',
    'Mike Portnoy',
    'Tim Alexander',
    'Matt Cameron'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validarFormulario = () => {
    if (!formData.nombre || !formData.correo || !formData.baterista) {
      return "Completa todos los campos.";
    }
    if (!formData.correo.includes("@") || !formData.correo.includes(".")) {
      return "Correo inválido.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensaje = validarFormulario();
    
    if (mensaje) {
      setError(mensaje);
      return;
    }

    setError('');
    onVotoSubmit(formData.nombre, formData.baterista);
    setFormData({ nombre: '', correo: '', baterista: '' });
  };

  return (
    <section className="recuadro">
      <h2>¿Quién es tu baterista favorito?</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Tu nombre:</label><br />
        <input 
          type="text" 
          id="nombre" 
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          placeholder="Escribe tu nombre"
        /><br /><br />

        <label htmlFor="correo">Tu correo:</label><br />
        <input 
          type="email" 
          id="correo" 
          name="correo"
          value={formData.correo}
          onChange={handleInputChange}
          placeholder="ejemplo@correo.com"
        /><br /><br />

        <label htmlFor="baterista">Elige un baterista:</label><br />
        <select 
          id="baterista" 
          name="baterista"
          value={formData.baterista}
          onChange={handleInputChange}
        >
          <option value="">-- Selecciona uno --</option>
          {bateristas.map(baterista => (
            <option key={baterista} value={baterista}>
              {baterista}
            </option>
          ))}
        </select><br /><br />

        <button type="submit">Enviar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
};

// Componente ListaVotos
const ListaVotos = ({ votos }) => {
  if (votos.length === 0) {
    return null;
  }

  return (
    <section className="recuadro">
      <h3>Votaciones registradas:</h3>
      {votos.map((voto, index) => (
        <p key={index}>
          {index + 1}. {voto.nombre} votó por {voto.baterista}
        </p>
      ))}
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className="footer">
      <p>Creado con pasión por la batería, Diego Castillo © 2025</p>
    </footer>
  );
};

// Componente Principal App
const App = () => {
  const [votos, setVotos] = useState([]);

  // Datos de los bateristas
  const bateristasData = [
    {
      nombre: "John Bonham",
      imagen: "imagenes/bonham.jpg",
      descripcion: "John Bonham fue el potente y preciso baterista de Led Zeppelin, ampliamente considerado uno de los más influyentes de la historia del rock. Conocido por su fuerza, groove impecable y técnica innovadora, redefinió el papel de la batería en la música pesada.",
      videoUrl: "https://www.youtube.com/watch?v=UOSf9f5_qZ8"
    },
    {
      nombre: "Keith Moon",
      imagen: "imagenes/moon.jpg", 
      descripcion: "Keith Moon fue el explosivo y carismático baterista de The Who, conocido por su estilo salvaje, innovador y poco convencional. Revolucionó la batería en el rock con su enfoque caótico pero musical, influenciando a generaciones de músicos.",
      videoUrl: "https://www.youtube.com/watch?v=PNbBDrceCy8"
    },
    {
      nombre: "Jeff Porcaro",
      imagen: "imagenes/porcaro.jpg",
      descripcion: "Jeff Porcaro fue uno de los bateristas de sesión más respetados de todos los tiempos, conocido por su trabajo con Toto y su groove legendario en canciones como 'Rosanna'. Maestro del feel y la precisión.",
      videoUrl: "https://www.youtube.com/watch?v=QRHf22WCPew&t=58s"
    },
    {
      nombre: "Neil Peart", 
      imagen: "imagenes/peart.jpg",
      descripcion: "Neil Peart fue el legendario baterista y letrista de Rush, conocido por su virtuosismo técnico, precisión milimétrica y composiciones líricas profundas. Revolucionó la batería en el rock progresivo.",
      videoUrl: "https://www.youtube.com/watch?v=IlohHLJg5kA"
    },
    {
      nombre: "Stewart Copeland",
      imagen: "imagenes/copeland.jpg", 
      descripcion: "Stewart Copeland fue el dinámico baterista de The Police, reconocido por su estilo explosivo, preciso y con fuertes influencias del reggae, punk y la música árabe.",
      videoUrl: "https://www.youtube.com/watch?v=aYr1G5X4d4g&t=111s"
    },
    {
      nombre: "Nick Mason",
      imagen: "imagenes/mason.jpg",
      descripcion: "Nick Mason es el baterista original de Pink Floyd, conocido por su estilo sobrio pero atmosférico, ideal para las largas composiciones progresivas de la banda.",
      videoUrl: "https://www.youtube.com/watch?v=GG2tZNOQWAA"
    },
    {
      nombre: "Gavin Harrison", 
      imagen: "imagenes/harrison.jpg",
      descripcion: "Gavin Harrison es uno de los bateristas más respetados del rock progresivo contemporáneo, con un estilo técnico y expresivo, presencia clave en bandas como Porcupine Tree y King Crimson.",
      videoUrl: "https://www.youtube.com/watch?v=6suv3mraIhw"
    },
    {
      nombre: "Mike Portnoy",
      imagen: "imagenes/portnoy.jpg",
      descripcion: "Mike Portnoy es un virtuoso baterista reconocido por ser cofundador de Dream Theater, donde destacó por su complejidad técnica, uso creativo de polirritmias y dominio del metal progresivo.",
      videoUrl: "https://www.youtube.com/watch?v=CFL7QMfQrtU"
    },
    {
      nombre: "Tim Alexander",
      imagen: "imagenes/tim.jpg", 
      descripcion: "Tim Alexander es mejor conocido por su trabajo con Primus, donde su estilo técnico, percusivo y lleno de cambios rítmicos ha sido fundamental para el sonido experimental de la banda.",
      videoUrl: "https://www.youtube.com/watch?v=J6QZMrmw0hk"
    },
    {
      nombre: "Matt Cameron",
      imagen: "imagenes/matt.jpg",
      descripcion: "Matt Cameron es el sólido y versátil baterista de Soundgarden y Pearl Jam, destacando por su potencia, dominio de compases complejos y capacidad para adaptarse al grunge y rock alternativo.",
      videoUrl: "https://www.youtube.com/watch?v=L1JVeIWszXc&t=130s"
    }
  ];

  // Efecto para cargar votos del almacenamiento local al iniciar
  useEffect(() => {
    const votosGuardados = JSON.parse(localStorage.getItem('drumVotos')) || [];
    setVotos(votosGuardados);
  }, []);

  // Efecto para guardar votos en almacenamiento local cuando cambian
  useEffect(() => {
    localStorage.setItem('drumVotos', JSON.stringify(votos));
  }, [votos]);

  // Función para agregar un nuevo voto
  const agregarVoto = (nombre, baterista) => {
    const nuevoVoto = { nombre, baterista };
    setVotos(prevVotos => [...prevVotos, nuevoVoto]);
  };

  return (
    <div className="app">
      <style>{`
        /* Estilo fondo */
        body {
          background-image: url(imagenes/Gavin_drum.jpg);
          background-size: cover;
          background-attachment: fixed;
          margin: 0;
          min-height: 100vh;
          font-family: "Lucida Sans", sans-serif;
        }

        .app {
          min-height: 100vh;
        }

        .header, .main-content, .footer {
          width: 90%;
          max-width: 800px;
          margin: 20px auto;
        }

        .centrar_texto {
          text-align: center;
          width: 90%;
          max-width: 800px;
          padding: 20px;
        }

        /* Estilo títulos */
        h1 {
          font-family: "Lucida Sans", "Lucida Grande", sans-serif;
          color: rgb(235, 157, 62);
          font-size: 5rem;
          margin-bottom: 30px;
          text-shadow: 5px 4px 2.5px rgba(0, 0, 0, 0.3);
        }

        h2 {
          color: rgb(36, 35, 35);
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        h3 {
          color: rgb(36, 35, 35);
          font-size: 1.3rem;
          margin-bottom: 15px;
        }

        /* Recuadro */
        .recuadro {
          opacity: 0.9;
          border-radius: 12px;
          padding: 25px;
          background: rgba(229, 229, 227, 0.85);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          margin-bottom: 20px;
        }

        .recuadro:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          opacity: 1;
        }

        /* Estilo Párrafos */
        p {
          color: rgb(36, 35, 35);
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* Estilo enlaces */
        a {
          color: #5a4f3d;
          text-decoration: none;
          font-weight: bold;
          border-bottom: 2px solid #5a4f3d;
          transition: all 0.2s;
        }

        a:hover {
          color: #7a6b52;
          border-bottom-color: #7a6b52;
        }

        .main-content {
          max-width: 800px;
          margin: 0 auto 60px;
          padding: 20px;
        }

        .footer {
          color: white;
          bottom: 0;
          width: 100%;
          font-family: "Lucida Sans", sans-serif;
          font-size: 1rem;
          text-shadow: 1px 1px 2px rgb(0, 0, 0);
          text-align: center;
          padding: 20px;
        }

        /* Formato imágenes recuadros */
        .img-baterista {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
        }

        /* Estilos de formulario */

        label {
          color: rgb(36, 35, 35);
          font-weight: bold;
          font-size: 1rem;
        }

        input, select {
          width: 100%;
          padding: 8px;
          margin: 5px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          box-sizing: border-box;
        }

        button {
          background-color: #5a4f3d;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #7a6b52;
        }
      `}</style>

      <Header />
      
      <main className="main-content">
        {bateristasData.map((baterista, index) => (
          <BateristaCard 
            key={index}
            nombre={baterista.nombre}
            imagen={baterista.imagen}
            descripcion={baterista.descripcion}
            videoUrl={baterista.videoUrl}
          />
        ))}
        
        <FormularioVotacion onVotoSubmit={agregarVoto} />
        <ListaVotos votos={votos} />
      </main>

      <Footer />
    </div>
  );
};

export default App;