import React from "react";
import "./Guide.css";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import ima_small from "./../../assets/construccion-small.png";
import ima_d1 from "./../../assets/user.png";
import ima_d2 from "./../../assets/user2.png";
/* import ima_d3 from "./../../assets/user2.png"; */

/* import ima_init from "./../../assets/image.png"; */
const Guide = () => {
  return (
    <div className="container">
      <div className="c1">
        <section>
          <h1>Creación cuenta de usuario</h1>
          <picture>
            {/* <img
              alt="Configuración Visor OnLook"
              src={ima_small}
              height="300vh"
              width="800vw"
            />{" "} */}
            <figcaption>Construyendo Metaversos</figcaption>
          </picture>
        </section>
      </div>
      {/*    <div className="c7">
        <section>
          <h3>
            Bienvenidos los invitamos a seguir los siguientes pasos para la
            configuración del Visor OnLook Viewer
          </h3>{" "}
          <div>
            1. Descarga del Visor Onlook dando Click en: <b> </b>
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              href="http://www.google.com/url?q=http%3A%2F%2Fmetaverseink.com%2Fdownload%2FOnLook_1-8-6-6289_Setup.exe&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGqgRH114PYXJUaef3FDKfKt03R9Q"
              target="_blank"
              aria-label="OnLook Download"
            >
              OnLook Download
            </Button>
          </div>
        </section>
      </div> */}
      <div className="c1">
        <section>
          <h3>
            Para iniciar el proceso de creación de cuentas damos click en el
            Botón Udla3D que nos redirecionara a el servidor
          </h3>{" "}
          <div>
            1. Pagina principal Servidor de Videojuegos Udla 3D: <b> </b>
            <Button
              type="primary"
              shape="round"
              /*  icon={<DownloadOutlined />} */
              href="http://www.google.com/url?q=http%3A%2F%2Fmetaverseink.com%2Fdownload%2FOnLook_1-8-6-6289_Setup.exe&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGqgRH114PYXJUaef3FDKfKt03R9Q"
              target="_blank"
              aria-label="OnLook Download"
            >
              Udla 3D
            </Button>
          </div>
        </section>
      </div>
      <div className="c1">
        {" "}
        <section>
          {/*   <h1>Ingresamos a nuestro sistemas de Cuentas</h1>
           */}{" "}
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_d1}
              height="300vh"
              width="100%"
            />{" "}
            {/*  <figcaption>Ingresamos a nuestro sistemas de Cuentas</figcaption> */}
          </picture>
        </section>
      </div>
      <div className="c1">
        {" "}
        <section>
          <h1>Ingresamos a nuestro sistemas de Cuentas</h1>
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_d2}
              height="300vh"
              width="100%"
            />{" "}
            {/*  <figcaption>1. Damos Clic en Grid manager</figcaption> */}
          </picture>
        </section>
      </div>
      <div className="c1">
        <section>
          <h3>
            1. Seguido realizamos los siguientes pasos. <br></br>2. Damos Clic
            en crear cuenta.<br></br> 3. Diligenciamos datos de formulario de
            creación de cuenta.
          </h3>{" "}
        </section>
      </div>
    </div>
  );
};
export default Guide;
