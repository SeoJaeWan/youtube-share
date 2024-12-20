"use client";
import { color } from "@/style/theme";
import ListOptionStyle from "./listOption.style";
import { useEffect, useState } from "react";
import { TiLink, TiArrowShuffle, TiArrowLoop } from "react-icons/ti";

const Img = {
  link: { Image: TiLink, size: 22 },
  loop: { Image: TiArrowShuffle, size: 20 },
  shuffle: { Image: TiArrowLoop, size: 20 },
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
      $active={!isActive || active}
      onClick={handleClick}
    >
      <Icon.Image size={Icon.size} color={color.white} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
