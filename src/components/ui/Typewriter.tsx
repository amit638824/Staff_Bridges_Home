import { useEffect, useState } from 'react';

const PHRASES = ['better salary', 'free interviews', 'jobs near you'];

export function Typewriter() {
  const [text, setText] = useState(PHRASES[0]);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setHideCursor(true);
      return;
    }

    let phraseIndex = 0;
    let charIndex = PHRASES[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const full = PHRASES[phraseIndex];

      if (!deleting) {
        if (charIndex < full.length) {
          charIndex += 1;
          setText(full.slice(0, charIndex));
          timer = setTimeout(tick, 90);
          return;
        }
        timer = setTimeout(() => {
          deleting = true;
          tick();
        }, 2400);
        return;
      }

      if (charIndex > 0) {
        charIndex -= 1;
        setText(full.slice(0, charIndex));
        timer = setTimeout(tick, 48);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % PHRASES.length;
      timer = setTimeout(tick, 300);
    };

    timer = setTimeout(() => {
      deleting = true;
      tick();
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="hero-title-rotate typewriter-wrap">
      <span>{text}</span>
      {!hideCursor && <span className="typewriter-cursor" aria-hidden="true" />}
    </span>
  );
}
