import { FC, ReactNode } from "react";

export type TextProps = {
  prefix?: string;
  children?: ReactNode | ReactNode[];
  suffix?: string;
};

export const Text: FC<TextProps> = (props) => {
  const { prefix, suffix, children } = props;
  return (
    <p>
      {prefix ?? ""}
      {children}
      {suffix ?? ""}
    </p>
  );
};
