import React from "react";
import "./Group.css";
import { Button, Radio } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

import ima_small from "./../../assets/construccion-small.png";
import ima_d1 from "./../../assets/Diapositiva1.png";
import ima_d2 from "./../../assets/Diapositiva2.PNG";
import ima_d3 from "./../../assets/Diapositiva3.PNG";
/*import ima_d4 from "./../../assets/Diapositiva4.PNG";
import ima_d5 from "./../../assets/Diapositiva5.PNG";
import ima_d6 from "./../../assets/Diapositiva6.PNG";
import ima_d7 from "./../../assets/Diapositiva7.PNG"; */
/* import ima_init from "./../../assets/image.png"; */
const Guide = () => {
  return (
    <div className="container">
      <div className="c1">
        <section>
          <h1>GRUPOS DE INVESTIGACIÓN</h1>
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_small}
              height="300vh"
              width="800vw"
            />{" "}
            <figcaption>Configuración Visor OnLook</figcaption>
          </picture>
        </section>
      </div>
      <div className="c7">
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
      </div>
      <div className="c2">
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
      </div>
      <div className="c4">
        {" "}
        <section>
          <h1>Configuración Visor OnLook</h1>
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_d1}
              height="300vh"
              width="100%"
            />{" "}
            <figcaption>
              Damos inicio al proceso de configuración del visor
            </figcaption>
          </picture>
        </section>
      </div>
      <div className="c2">
        <section>
          <h3>1. Damos Clic en Grid manager</h3>{" "}
        </section>
      </div>
      <div className="c4">
        {" "}
        <section>
          <h1>Configuración Visor OnLook</h1>
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_d2}
              height="300vh"
              width="100%"
            />{" "}
            <figcaption>1. Damos Clic en Grid manager</figcaption>
          </picture>
        </section>
      </div>
      <div className="c2">
        <section>
          <h3>2. Seguid en Grids</h3>{" "}
        </section>
      </div>
      <div className="c4">
        {" "}
        <section>
          <h1>Configuración Visor OnLook</h1>
          <picture>
            <img
              alt="Configuración Visor OnLook"
              src={ima_d3}
              height="300vh"
              width="100%"
            />{" "}
            <figcaption>2. Seguid en Grids</figcaption>
          </picture>
        </section>
      </div>
      <div className="c2">
        <section>
          <h3>3. Luego en la opción de Create</h3>{" "}
        </section>
      </div>
    </div>
  );
};
export default Guide;
