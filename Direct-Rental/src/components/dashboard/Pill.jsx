const Pill = ({ label, className='' }) => {
  return(
    <p className={`rounded-4xl text-xs px-3 py-1 ${className}`}>{label}</p>
  );
}

export default Pill;