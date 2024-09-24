import {useState} from "react";
export const App = () => {


  const listadoestudiantes = [
    {
    name:'juan',
    years: 12,
    },
    {
    name:'juana',
    years: 12,
    },
    {
    name:'pepe',
    years: 12,
    },
    {
    name: 'pedro',
    years: 12,
    },
    {
    name:'alex',
    years: 12,
    },
    {
    name:'ian',
    years: 12,
    },
    ];
    

  const [estudiantes, setEstudiantes] = useState(listadoestudiantes)
const [nombreForm, setNombreForm] = useState('');
const [errorMessage, setErrorMessage] = useState('')
const [error, setError] = useState(false)

  const handlesubmit = (e) => {
    e.preventDefault();
    if (nombreForm.trim() === '') {
      setErrorMessage('nombre invalido');
      setError(true);
      return;
    }
setEstudiantes( [...estudiantes, {name:nombreForm, years: 12} ] )
console.log(estudiantes);

}





  return(
    <div className='container'>
      {
  error
  ? (
    <p>{errorMessage}</p>
  )
  : (<></>)
}



<form onSubmit={( e ) => handlesubmit(e)}>
<input type="text" placeholder="añadir estudiante" 
value={ nombreForm }
onChange={(e) => setNombreForm (e.target.value)}
/>
<button type="submit">añadir</button>

</form>

{
estudiantes.map((estudiante, index) => (
    <p key={ index }>{`Nro ${ index + 1 } - ${ estudiante.name }`}</p>
  ))
}
    </div>
  )
}