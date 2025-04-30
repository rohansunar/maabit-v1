const IconWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center justify-center rounded-full bg-blue-50 text-maabit-blue p-2 ${className}`}>{children}</span>
);
export default IconWrapper; 