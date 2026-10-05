import type { CSSProperties, ReactNode } from "react";

type WrapProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Wrap({ children, className, style }: WrapProps) {
  return (
    <div className={className ? `wrap ${className}` : "wrap"} style={style}>
      {children}
    </div>
  );
}