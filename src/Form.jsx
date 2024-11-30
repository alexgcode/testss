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

  

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
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
          <div className="mt-8 py-7 px-14 grid gap-5 md:grid-cols-1 border-solid	border-4">
            <h4 className="text-3xl   text-left font-bold">Datos Personales</h4>
            <Input
              label="Nombres"
              type="text"
              id="nombres"
              placeholder="Escribe tus nombres..."
            />
            <Input
              label="Apellidos"
              type="text"
              id="apellidos"
              placeholder="Escribe tus apellidos..."
            />
            <Input
              label="Telefono"
              type="text"
              id="telefono"
              placeholder="0000-00000000"
            />
            <Input
              label="Dirección"
              type="text"
              id="direccion"
              placeholder="..."
            />
          </div>
          <div className="mt-8 py-7 px-14 grid gap-5 md:grid-cols-1 border-solid	border-4">
          <h4 className="text-3xl   text-left font-bold">Datos Académicos</h4>
            <Select
              label="Departamento"  
              id="departamento"
              items={departamentos}
            />
            <Select
              label="Estatus"  
              id="estatus"
              items={estados}
            />
            <Input
              label="Titulación"
              type="text"
              id="titulacion"
              placeholder="..."
            />
            <Input
              label="Especialidad"
              type="text"
              id="especialidad"
              placeholder="..."
            />
            
          </div>
          <div className="text-center mt-5">
            <button onClick={onSubmit} className="inline-flex w-50  gap-x-1.5  rounded-md bg-blue-950 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:text-blue-950">
              Agregar Profesor
            </button>
          </div>
        </div>
        
        
      </form>
    </FormProvider>
    
  )
}
