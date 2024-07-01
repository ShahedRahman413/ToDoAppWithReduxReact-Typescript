interface TConainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: TConainerProps) => {
  return <div className=" h-screen w-full max-w-7xl ">{children}</div>;
};

export default Container;
