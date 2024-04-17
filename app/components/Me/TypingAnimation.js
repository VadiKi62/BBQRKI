import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

const TypingAnimation = ({ typingData, extraClassName }) => {
  const el = useRef(null);

  const [loadTypeWriter, setloadTypeWriter] = useState(false);

  useEffect(() => {
    setloadTypeWriter(true);
  }, []);

  return (
    <>
      {loadTypeWriter && (
        <span ref={el} id="subtitle">
          <Typewriter
            options={{
              wrapperClassName: `${extraClassName} typing-subtitle`,
              strings: typingData
                ? typingData
                : [
                    " I develop  <strong>websites</strong>",
                    " I code <strong>mobile apps</strong>",
                  ],
              autoStart: true,
              loop: true,
              smartBackspace: true,
            }}
            loop={true}
          />
        </span>
      )}
    </>
  );
};
export default TypingAnimation;
