import PlayStyle from "./play.style";

const Play = () => {
  return (
    <PlayStyle.Container>
      <PlayStyle.StateBar
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 104.06 104.06"
      >
        <circle className="state" cx="52.03" cy="52.03" r="42.03" />
        <g className="button">
          <circle cx="52.03" cy="52.03" r="40.03" />
          <path d="M42.87,36.51v28.52c0,.6.61.98,1.1.68l22.61-14.26c.48-.3.48-1.04,0-1.34l-22.61-14.26c-.49-.31-1.1.07-1.1.67Z" />
        </g>
      </PlayStyle.StateBar>
    </PlayStyle.Container>
  );
};

export default Play;
