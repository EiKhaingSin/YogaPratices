const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: 'bg-gradient-to-r from-teal-600 to-teal-700 text-white hover:from-teal-700 hover:to-teal-800 focus:ring-teal-500 shadow-teal-500/50',
    secondary: 'bg-gradient-to-r from-sage-600 to-sage-700 text-white hover:from-sage-700 hover:to-sage-800 focus:ring-sage-500 shadow-sage-500/50',
 
    brown: 'bg-[#C5B1A9] text-white hover:bg-[#91847F] focus:ring-[#C5B1A9] shadow-[#C5B1A9]/30',
    outline: 'border-2 border-teal-600 text-teal-600 bg-white hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 hover:border-teal-700 focus:ring-teal-500 shadow-md',
    ghost: 'text-teal-600 bg-white hover:bg-gradient-to-r hover:from-teal-50 hover:to-teal-100 focus:ring-teal-500 shadow-sm',
  };
  
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;

