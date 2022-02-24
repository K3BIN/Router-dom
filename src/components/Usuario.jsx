import React,{useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Usuario = () => {
  const [usuario, setUsuario] = useState([]);
  const {id} = useParams();

  const obtenerUsuario = async () => {
    const users = await (await axios.get(`https://my-json-server.typicode.com/K3BIN/Rutas/lista/${id}`)).data;
    setUsuario(users);
  };
  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <div>
      <div className="row mt-5">
        <div className="col" />
        <div className="col">
          <h4>Usuario</h4>
          <p>Nombre: {usuario.name}</p>
          <p>Username: {usuario.username}</p>
          <p>Email: {usuario.email}</p>
          <small>Teléfono: {usuario.phone}</small>
        </div>
        <div className="col" />
      </div>
    </div>
  );
};

export default Usuario;


