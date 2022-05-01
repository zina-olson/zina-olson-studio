import { ReactElement } from 'react'
import logo from './logo.svg'

function App(): ReactElement {
  return (
    <div className="border border-gray-50 rounded-xl p-20 shadow-xl">
      <header>
        <div className="flex justify-center">
          <img src={logo} className="h-32 w-32 hover:animate-spin" alt="logo" />
        </div>
        <p className="text-2xl font-mono pb-3">Olson Studio</p>
        <p></p>
        <p className="text-xs">( More content coming soon )</p>
      </header>
    </div>
  )
}

export default App
