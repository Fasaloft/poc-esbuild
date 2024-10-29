import { FC, ReactNode } from "react";
import { Text } from "@vertice-design-system/text";

export type ButtonProps = {
  children?: ReactNode | ReactNode[];
};

export const Button: FC<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button>
      <Text prefix="Hi">{children}</Text>
    </button>
  );
};
