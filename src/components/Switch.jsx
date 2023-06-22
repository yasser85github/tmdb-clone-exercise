import { useState, useRef, useLayoutEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setToMovies, setToTheatres } from "../features/media/mediaSlice";

export default function Switch() {
  const [item1Width, setItem1Width] = useState(0);
  const [item2Width, setItem2Width] = useState(0);
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);

  const media = useSelector((state) => state.media.value);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    setItem1Width(item1Ref.current.offsetWidth);
    setItem2Width(item2Ref.current.offsetWidth);
  }, []);

  const activeTextColor =
    "bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]";
  return (
    <div className="hover:cursor-pointer h-8 border-solid border-tmdbDarkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative z-[1]">
      <div
        ref={item1Ref}
        onClick={() => dispatch(setToMovies())}
        className={`py-1 px-5 h-8  rounded-[30px] ${
          media === "In Theatres" || activeTextColor
        }`}
      >
        Movies
      </div>
      <div
        ref={item2Ref}
        onClick={() => dispatch(setToTheatres())}
        className={`py-1 px-5 h-8  rounded-[30px] ${
          media === "In Theatres" && activeTextColor
        }`}
      >
        In Theatres
      </div>
      <div
        className="h-8 w-20 bg-tmdbDarkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in"
        style={
          media == "In Theatres"
            ? { left: `${item1Width}px`, width: `${item2Width}px` }
            : { left: "0", width: `${item1Width}px` }
        }
      ></div>
    </div>
  );
}
