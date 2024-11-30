/*-------------------------------------------------------------------
|  🐼 React FC App
|
|  🐯 Purpose: RENDERS REACT APP
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/

import { NavButton, Navigation } from './components'
import { Form } from './Form'
import { useState } from 'react'

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div>
      <NavButton />
      <Navigation />
      <div className={`flex-1 p-4 bg-gray-100 min-h-screen duration-300 place-content-center ${
          isSidebarOpen ? "ml-[300px] " : "ml-0  mt-[80px]"
        } lg:ml-[300px] lg:mt-0`}>

          <Form />
      </div>
      
    </div>
  )
}

export default App
