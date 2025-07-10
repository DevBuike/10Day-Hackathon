const Button = ({ label, className='', type='' }) => {
  return (
    <button className={`px-8 py-3 rounded ${className}`} >
      { label }
    </button>
  )
}

export default Button;