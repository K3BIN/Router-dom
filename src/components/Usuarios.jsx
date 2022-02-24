import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import perfil from '../images/perfil.png';
import perfil2 from '../images/perfil2.png';
import Cards from './Cards';
const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  const obtenerUsuarios = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/K3BIN/Rutas/lista"
    );
    const users = await res.data;
    setUsuarios(users);
  };
  useEffect(() => {
    obtenerUsuarios();
  }, []);
  return (
    <div>
      <div className="row mt-5">
        <div className="col" />
        <div className="col">
          <h1>Colaboradores</h1>
          <nav>
            {usuarios.map((item) => (
              <div key={item.id}>
                <hr/><hr/>
                <Link to={`/usuario/${item.id}`}> 
                  {item.id > 1 ? (
                    <Cards imagen={perfil2} titulo={item.name} />
                  ) : (
                    <Cards imagen={perfil} titulo={item.name} />
                  )  }
                </Link>
              </div>
            ))}
          </nav>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

export default Usuarios;