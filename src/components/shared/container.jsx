import clsx from "clsx";

const Container = ({ children, className}) => {
  return (
    <div className={clsx("mx-auto max-w-[2200px]:px-12 max-[2200px]:px-10  min-[2200px]:max-w-7xl", className)}>
      <div className="">{children}</div>
    </div>
  );
}

export default Container