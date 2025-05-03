export const Button = ({ children, variant, size = "md", ...props }) => {
    const base = "rounded-md px-3 py-2";
    const variants = {
      outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100",
      solid: "bg-purple-600 text-white hover:bg-purple-700"
    };
    return (
      <button className={`${base} ${variants[variant] || ""}`} {...props}>
        {children}
      </button>
    );
  };
  