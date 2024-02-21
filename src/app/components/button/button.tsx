type ButtonProps = {
  children: React.ReactNode;
};
export default function SimpleButton({ children }: ButtonProps) {
  return <button>{children}</button>;
}
