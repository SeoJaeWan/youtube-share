"use client";
import { color } from "@/style/theme";
import ListOptionStyle from "./listOption.style";
import { useEffect, useState } from "react";
import { TiLink, TiArrowShuffle, TiArrowLoop } from "react-icons/ti";
import HoverInfo from "../../common/hoverInfo";

const Img = {
  link: { Image: TiLink, size: 22, label: "공유" },
  loop: { Image: TiArrowLoop, size: 20, label: "반복 재생" },
  shuffle: { Image: TiArrowShuffle, size: 20, label: "랜덤 셔플" },
};

interface ListOptionProps {
  type: "loop" | "shuffle" | "link";
  isActive?: boolean;
  onClick: (value: boolean) => void;
}

const ListOption = (props: ListOptionProps) => {
  const { type, isActive, onClick } = props;
  const [active, setActive] = useState(false);

  const Icon = Img[type];

  const handleClick = () => {
    const update = !active;
    setActive(update);
    onClick(update);
  };

  useEffect(() => {
    setActive(localStorage.getItem(type) === "true");
  }, [type]);

  return (
    <ListOptionStyle.Container
      className="tooltip"
      $active={!isActive || active}
      onClick={handleClick}
    >
      <HoverInfo>{Icon.label}</HoverInfo>
      <Icon.Image size={Icon.size} color={color.white} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
