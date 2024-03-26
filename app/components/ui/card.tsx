import { forwardRef } from "react";

const Card = forwardRef(
  (
    {
      children,
      dataTestId,
    }: { children: React.ReactNode; dataTestId?: string },
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <div
        className="flex flex-col space-y-2 bg-small-panel p-4 rounded-xl size-full"
        data-testid={dataTestId}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardTitle = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="text-gray-400 flex items-center space-x-2">
      {icon}
      <h3 className="uppercase font-normal text-xs">{title}</h3>
    </div>
  );
};

const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-white text-2xl font-semibold">{children}</div>;
};

const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-400 text-xs">{children}</p>;
};

export { Card, CardContent, CardDescription, CardTitle };
