const Button = ({ label, className='', type='' }) => {
  return (
    <button className={`cursor-pointer px-4 md:px-8 py-3 rounded ${className}`} >
      { label }
    </button>
  )
}

export default Button;