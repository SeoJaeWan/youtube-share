import { FaListUl } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";
import useTrackManager from "@/store/trackManager";
import TrackControllerStyle from "./trackController.style";
import { color } from "@/style/theme";
import { useYoutube } from "@/hooks/useYoutube";
import HoverInfo from "../hoverInfo";

interface TrackControllerProps {
  leftTooltip?: boolean;
}

const TrackController = (props: TrackControllerProps) => {
  const { leftTooltip } = props;
  const { isList, updateList } = useTrackManager();
  const { list } = useYoutube();

  const handleUpdateList = () => {
    updateList(list.length);
  };

  return (
    <TrackControllerStyle.Container
      className="tooltip"
      onClick={handleUpdateList}
    >
      <HoverInfo leftTooltip={leftTooltip}>
        {isList ? "노래 추가" : "재생 목록"}
      </HoverInfo>

      {isList ? (
        <IoAddOutline color={color.white} size={20} />
      ) : (
        <FaListUl color={color.white} />
      )}
    </TrackControllerStyle.Container>
  );
};

export default TrackController;
