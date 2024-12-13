import { IoIosPlay } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import ItemStyle from "./item.style";
import SlideText from "../../common/slideText";
import { color } from "@/style/theme";
import useTrackManager from "@/store/trackManager";
import { ListType } from "@/components/molecules/common/list";

interface ItemProps {
  title: string;
  link: string;
  index: number;
  delay: number;
  type: ListType;
}

const Item = (props: ItemProps) => {
  const {
    title,
    delay,
    type,
    // link, index
  } = props;

  const { isList, duration } = useTrackManager();

  const itemClass = isList ? "show" : "hide";

  return (
    <ItemStyle.Container
      $delay={delay + (isList ? duration : 0)}
      $duration={duration}
      className={itemClass}
    >
      <ItemStyle.Title>
        <SlideText>{title}</SlideText>
      </ItemStyle.Title>
      {type === "admin" && (
        <>
          <ItemStyle.Button>
            <RiDeleteBin6Line size={18} color={color.gray} />
          </ItemStyle.Button>
          <ItemStyle.Button $active={true}>
            <IoIosPlay size={22} color={true ? color.white : color.primary} />
          </ItemStyle.Button>
        </>
      )}
    </ItemStyle.Container>
  );
};

export default Item;
