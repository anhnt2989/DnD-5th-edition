import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { AppRoutes } from 'app/config'

function App() {
  const elements = useRoutes(AppRoutes)
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {elements}
      </Suspense>
      <ToastContainer
        closeOnClick={true}
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
