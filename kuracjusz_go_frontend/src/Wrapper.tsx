type WrapperProps = {
  children: React.ReactNode;
};
export default function Wrapper({ children }: WrapperProps) {
  return <div className=" h-full relative">{children}</div>;
}
