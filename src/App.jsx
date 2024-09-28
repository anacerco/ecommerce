
import './App.css'

function App() {

  return (
    <>
    <div>
      <h1>Registro</h1>
      <form>
        <div>
          <label> Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        
        <div>
          <label >Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        
        <div>
          <label >Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        
        <div>
          <label >Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>
        
        <div>
          <label >Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        
        <div>
          <label >Confirmar Contraseña:</label>
          <input type="password" id="confirmarPassword" name="confirmarPassword" />
        </div>
        
        <button type="submit">Confirmar Registro</button>
      </form>
    </div>
    </>
  )
}

export default App
