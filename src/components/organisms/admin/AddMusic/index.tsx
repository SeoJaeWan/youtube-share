"use client";

import { FaPlus } from "react-icons/fa6";
import AddMusicStyle from "./addMusic.style";
import { useEffect, useRef, useState } from "react";
import MusicForm from "@/components/molecules/common/musicForm";

const ButtonSize = 50;
const defaultGap = 20;

const AddMusic = () => {
  const [showInput, setShowInput] = useState(false);

  const coverRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const max = useRef({ x: 0, y: 0 });
  const drag = useRef(false);
  const dragUpdate = useRef(false);

  const handleToggle = () => {
    if (!dragUpdate.current) {
      setShowInput((prev) => !prev);
    }
  };

  useEffect(() => {
    const mainEl = document.querySelector("main")!;
    const { width, height } = mainEl.getBoundingClientRect();

    const maxX = width - ButtonSize;
    const maxY = height - ButtonSize;

    max.current = {
      x: maxX,
      y: maxY,
    };

    coverRef.current!.style.top = `${maxY - defaultGap}px`;
    coverRef.current!.style.left = `${maxX - defaultGap}px`;

    const formSizeUpdate = () => {
      const form = formRef.current!;
      const cover = coverRef.current!;

      const { x } = max.current;

      const { left } = cover.style;

      const leftNum = parseInt(left, 10);

      const width = Math.max(leftNum, x - leftNum) + ButtonSize;

      form.style.width = `${width}px`;
    };

    const mouseUp = () => {
      drag.current = false;
      dragUpdate.current = false;
    };

    const dragStart = (e: MouseEvent) => {
      if (drag.current) {
        dragUpdate.current = true;
        const cover = coverRef.current!;
        const { movementX, movementY } = e;

        const { top, left } = cover.style;

        const topNum = parseInt(top, 10);
        const leftNum = parseInt(left, 10);

        console.log(topNum, leftNum);

        const nextTop = Math.max(
          Math.min(topNum + movementY, max.current.y),
          0
        );
        const nextLeft = Math.max(
          Math.min(leftNum + movementX, max.current.x),
          0
        );

        cover.style.top = `${nextTop}px`;
        cover.style.left = `${nextLeft}px`;

        if (nextTop < max.current.y / 2) {
          cover.classList.add("reverseY");
        } else {
          cover.classList.remove("reverseY");
        }

        if (nextLeft < max.current.x / 2) {
          cover.classList.add("reverseX");
        } else {
          cover.classList.remove("reverseX");
        }

        formSizeUpdate();
      }
    };

    formSizeUpdate();

    window.addEventListener("mouseup", mouseUp);
    window.addEventListener("mousemove", dragStart);

    return () => {
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("mousemove", dragStart);
    };
  }, []);

  return (
    <AddMusicStyle.Container ref={coverRef}>
      <AddMusicStyle.Button
        onMouseDown={() => {
          drag.current = true;
        }}
        onClick={handleToggle}
      >
        <FaPlus size={40} />
      </AddMusicStyle.Button>

      <AddMusicStyle.InputForm $showInput={showInput} ref={formRef}>
        <MusicForm />
      </AddMusicStyle.InputForm>
    </AddMusicStyle.Container>
  );
};

export default AddMusic;
