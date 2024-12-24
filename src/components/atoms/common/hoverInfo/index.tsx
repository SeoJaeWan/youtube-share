import { PropsWithChildren } from "react";
import HoverInfoStyle from "./hoverInfo.style";

interface HoverInfoProps extends PropsWithChildren {
  leftTooltip?: boolean;
}

const HoverInfo = (props: HoverInfoProps) => {
  const { children, leftTooltip } = props;

  return (
    <HoverInfoStyle.Container
      $leftTooltip={leftTooltip}
      className="tooltip-info"
    >
      {children}
    </HoverInfoStyle.Container>
  );
};

export default HoverInfo;
