import { PropsWithChildren, useEffect, useRef, useState } from "react";
import SlideTextStyle from "./slideText.style";

const SlideText = (props: PropsWithChildren) => {
  const { children } = props;
  const coverRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const [parentWidth, setParentWidth] = useState<number>(0);

  useEffect(() => {
    const cover = coverRef.current;
    const text = textRef.current;

    if (!cover || !text) return;

    const coverWidth = cover.offsetWidth;
    const textWidth = text.offsetWidth;

    if (textWidth > coverWidth) {
      text.classList.add("slide");
      setParentWidth(coverWidth);
    } else {
      text.classList.remove("slide");
    }
  }, [children]);

  return (
    <SlideTextStyle.Container ref={coverRef} $parentWidth={parentWidth}>
      <SlideTextStyle.Text ref={textRef}>{children}</SlideTextStyle.Text>
    </SlideTextStyle.Container>
  );
};

export default SlideText;
