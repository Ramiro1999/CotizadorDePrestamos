function Button({operador,fn}) {

  return (
   <button
        type='button'
        className='h-10 w-10 items-center justify-center 
        font-bold text-white bg-lime-500 text-2xl rounded-full hover:outline-none hover:ring-2
        hover:ring-offset-2 hover:ring-lime-500' 
        onClick={fn}
   >{operador}</button>
  )
}

export default Button

//rfce permite crear el componente sin tener que escribir todo