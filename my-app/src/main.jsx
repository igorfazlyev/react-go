import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloWorld from './App'
//import AppClass from './AppClass'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="col">
            <HelloWorld msg="State using a functional component" />
          </div>
        </div>
      </div>
    </div>

  </StrictMode>,
)
