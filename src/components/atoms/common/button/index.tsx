import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import ButtonStyle from "./button.style";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  effect?: boolean;
}

const delay = [0, 0.3, 0.6];

const Button = (props: ButtonProps) => {
  const { effect, children, ...rest } = props;

  return (
    <ButtonStyle.Container $effect={effect}>
      {delay.map((d, i) => (
        <ButtonStyle.Effect key={i} $delay={d} />
      ))}

      <ButtonStyle.Button {...rest}>{children}</ButtonStyle.Button>
    </ButtonStyle.Container>
  );
};

export default Button;
