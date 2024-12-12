import PlayStyle from "./play.style";

const Play = () => {
  return (
    <PlayStyle.Container>
      <PlayStyle.StateBar
        id="_레이어_2"
        data-name="레이어_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140.05 140.05"
      >
        <circle className="bg" cx="70.03" cy="70.03" r="65.03" />
        <circle className="state" cx="70.03" cy="70.03" r="58.03" />
        <g className="button">
          <circle cx="70.03" cy="70.03" r="50.85" />
          <path d="M56.48,94.77c-.83,0-1.64-.22-2.35-.63-1.61-.91-2.62-2.69-2.62-4.62v-39c0-1.93,1-3.7,2.62-4.62,1.49-.86,3.34-.84,4.81.06l33.33,19.95c2.27,1.42,2.95,4.41,1.53,6.67-.39.62-.91,1.14-1.53,1.53l-33.34,19.96c-.74.45-1.59.69-2.45.69Z" />
        </g>
      </PlayStyle.StateBar>
    </PlayStyle.Container>
  );
};

export default Play;
