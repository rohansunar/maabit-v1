const Card = ({ children, className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`rounded-xl shadow bg-white p-6 ${className}`} {...props}>{children}</div>
);
export default Card; 