import { FaPlay } from "react-icons/fa6";
import ItemStyle from "./item.style";
import { MdDelete } from "react-icons/md";
import SlideText from "../../common/slideText";

interface ItemProps {
  title: string;
  link: string;
  index: number;
}

const Item = (props: ItemProps) => {
  const {
    title,
    // link, index
  } = props;

  return (
    <ItemStyle.Container $active={false}>
      <ItemStyle.Title>
        <SlideText>{title}</SlideText>
      </ItemStyle.Title>
      <ItemStyle.Button>
        <MdDelete size={20} />
      </ItemStyle.Button>
      <ItemStyle.Button>
        <FaPlay size={16} />
      </ItemStyle.Button>
    </ItemStyle.Container>
  );
};

export default Item;
