import React from 'react'
import Timelinecontent from './Timelinecontent'

const Trajectory = () => {
  return (
    <>
      <div className='trajectory' id='timeline'>
        <p className='timelineTitle'>Trayectoria</p>
        <div className="timelineContainer">
          <div className="timeline">
          </div>
            <Timelinecontent 
              title='Bootcamp Lumetrio'
              fecha='Noviembre 2023 - Enero 2024' 
              context='En este Bootcamp aprendi las bases de el desarrollo y la belleza del mundo IT'
            />
            <Timelinecontent 
              title='Facultad de Ingenieria UDELAR'
              fecha='Febrero 2024 - Actualmente cursando' 
              context='Carrera en Ingenieria Electrica donde adquiero conocimientos de grado academico'
              />
            <Timelinecontent 
              title='Java Autodidacta'
              fecha='Marzo 2024' 
              context="Este es el metodo de aprendizaje que mantengo hasta ahora centrandome en el desarrollo backend, la creacion de API's y Microservicios"
              />   
            <Timelinecontent 
              title='Creacion de proyectos'
              fecha='Mayo 2024' 
              context='Empece a crear proyectos personales para afianzar mis conocimientos con experiencia en retos autoimpuestos. A su vez realice algunos proyectos de indole profesional para algunos emprendimientos del mercado'
            />
          </div>

      </div>
    </>
  )
}

export default Trajectory
