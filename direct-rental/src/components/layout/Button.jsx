const Button = ({ label, className = '' }) => {
  return (
    <button className="px-8 py-3 rounded ${className} text-blue-500 bg-white mt-1">
      { label }
    </button>
  )
}

export default Button;