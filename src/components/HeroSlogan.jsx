import { useState, useEffect, useRef } from "react";
import "../styles/HeroSlogan.css";

const SLOGAN_TEXT = "Focused on Your Growth & Committed to Your Peace of Mind";
const TYPING_SPEED_MS = 40;
const PAUSE_BEFORE_DELETE_MS = 2500;
const PAUSE_BEFORE_RETYPE_MS = 800;

function HeroSlogan() {
  const [typed, setTyped] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const progressRef = useRef(0);
  const timeoutRef = useRef(null);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      if (!isDeletingRef.current) {
        if (progressRef.current < SLOGAN_TEXT.length) {
          progressRef.current += 1;
          setTyped(SLOGAN_TEXT.slice(0, progressRef.current));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED_MS);
        } else {
          setIsTypingComplete(true);
          timeoutRef.current = setTimeout(() => {
            if (!cancelled) {
              isDeletingRef.current = true;
              setIsTypingComplete(false);
              tick();
            }
          }, PAUSE_BEFORE_DELETE_MS);
        }
      } else {
        if (progressRef.current > 0) {
          progressRef.current -= 1;
          setTyped(SLOGAN_TEXT.slice(0, progressRef.current));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED_MS);
        } else {
          isDeletingRef.current = false;
          timeoutRef.current = setTimeout(() => {
            if (!cancelled) tick();
          }, PAUSE_BEFORE_RETYPE_MS);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, 300);

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="hero-slogan-section">
      <div className="hero-slogan-card">
        <div className="hero-slogan-divider"></div>
        <p className="hero-slogan-line">
          <span className="hero-slogan-quote hero-slogan-quote-open">&ldquo;</span>
          {typed}
          {isTypingComplete && (
            <span className="hero-slogan-cursor hero-slogan-cursor-blink"></span>
          )}
          {!isTypingComplete && typed && <span className="hero-slogan-cursor"></span>}
          {isTypingComplete && (
            <span className="hero-slogan-quote hero-slogan-quote-close">&rdquo;</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default HeroSlogan;