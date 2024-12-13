import Image from "next/image";
import ListOptionStyle from "./listOption.style";

const Img = {
  loop: { src: "/assets/controller/loop.svg", alt: "반복 재생" },
  shuffle: { src: "/assets/controller/shuffle.svg", alt: "셔플 재생" },
};

interface ListOptionProps {
  type: "loop" | "shuffle";
  active?: boolean;
  onClick?: () => void;
}

const ListOption = (props: ListOptionProps) => {
  const { type, active, onClick } = props;

  const img = Img[type];
  const alt = img.alt + `${active ? " 종료" : ""}`;

  return (
    <ListOptionStyle.Container $active={active} onClick={onClick}>
      <Image src={img.src} alt={alt} width={25} height={25} />
    </ListOptionStyle.Container>
  );
};

export default ListOption;
