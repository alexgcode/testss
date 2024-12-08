/*-------------------------------------------------------------------
|  🐼 React FC Form
|
|  🦝 Todo: CREATE AN AWESOME AND MAINTAINABLE FORM COMPONENT 
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { Input,Select } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  name_validation,
  desc_validation,
  email_validation,
  num_validation,
  password_validation,
} from './utils/inputValidations'
import { useState } from 'react'
import { GrMail } from 'react-icons/gr'
import { BsFillCheckSquareFill } from 'react-icons/bs'


export const Form = () => {

  const methods = useForm()

  const [loading, setLoading] = useState(false); // Estado de carga

  const onSubmit = methods.handleSubmit(async data => {
    console.log(data)
    

    try {
      setLoading(true); 

      const response = await fetch('https://backend-node-git-master-alexgf2703gmailcoms-projects.vercel.app/profesores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
  
      const result = await response.json();
      console.log('Datos enviados exitosamente:', result);

      alert('¡Registro exitoso! Los datos se han enviado correctamente.');
      window.location.href = 'https://backend-node-git-master-alexgf2703gmailcoms-projects.vercel.app/profesores';

    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un error al enviar los datos. Por favor, inténtalo de nuevo.');
      // Muestra un mensaje de error al usuario
    }
    finally {
      setLoading(false); // Finaliza el estado de carga
    }
  })

  const departamentos = [
    {value: 'matematicas', desc:'Matemáticas'},
    {value: 'fisica', desc:'Física'},
    {value: 'informatica', desc:'Informática'},
    {value: 'administracion', desc:'Administración'}
  ]
  
  const estados = [
    {value: 'activo', desc:'Activo'},
    {value: 'inactivo', desc:'Inactivo'}
  ]

  return (
    <FormProvider {...methods}>
      <form onSubmit={e => e.preventDefault()}
        noValidate
        className="pt-3 box-content  "
        >
        <h2 className="ml-3 text-5xl   text-left font-semibold">Agregar Nuevo Profesor</h2>

        <div className="ml-3 place-content-center w-3/4">
          <div className="mt-8 py-7 lg:px-14 grid gap-5 md:grid-cols-1 border-solid	border-4">
            <h4 className="text-3xl   text-left font-bold">Datos Personales</h4>
            <Input
              label="nombres"
              type="text"
              id="nombres"
              placeholder="Escribe tus nombres..."
            />
            <Input
              label="apellidos"
              type="text"
              id="apellidos"
              placeholder="Escribe tus apellidos..."
            />
            <Input
              label="telefono"
              type="text"
              id="telefono"
              placeholder="0000-00000000"
            />
            <Input
              label="direccion"
              type="text"
              id="direccion"
              placeholder="..."
            />
          </div>
          <div className="mt-8 py-7 lg:px-14 grid gap-5 md:grid-cols-1 border-solid	border-4">
          <h4 className="text-3xl   text-left font-bold">Datos Académicos</h4>
            <Select
              label="departamento"  
              id="departamento"
              items={departamentos}
            />
            <Select
              label="estatus"  
              id="estatus"
              items={estados}
            />
            <Input
              label="titulacion"
              type="text"
              id="titulacion"
              placeholder="..."
            />
            <Input
              label="especialidad"
              type="text"
              id="especialidad"
              placeholder="..."
            />
            
          </div>
          <div className="text-center mt-5">
            <button onClick={onSubmit} disabled={loading} className="inline-flex w-50  gap-x-1.5  rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-blue-950">
              {loading ? 'Registrando...' : 'Agregar Profesor'}
            </button>
          </div>
        </div>
        
        
      </form>
    </FormProvider>
    
  )
}
