import React, { useState, useEffect, useRef } from "react";
import "./Sector.css";

const TYPING_SPEED_MS = 40;
const PAUSE_BEFORE_DELETE_MS = 2500;
const PAUSE_BEFORE_RETYPE_MS = 800;

const SectorBack = ({ name, title, cover, typedLines }) => {
  const [typed, setTyped] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const progressRef = useRef(0);
  const timeoutRef = useRef(null);
  const isDeletingRef = useRef(false);
  const fullTextRef = useRef("");

  useEffect(() => {
    if (!typedLines || typedLines.length === 0) {
      return undefined;
    }

    fullTextRef.current = typedLines.join(" ");

    // Cancel any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Reset state
    progressRef.current = 0;
    isDeletingRef.current = false;
    setTyped("");
    setIsTypingComplete(false);

    let cancelled = false;

    const tick = () => {
      if (cancelled) return;

      if (!isDeletingRef.current) {
        // Typing forward
        if (progressRef.current < fullTextRef.current.length) {
          progressRef.current += 1;
          setTyped(fullTextRef.current.slice(0, progressRef.current));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED_MS);
        } else {
          // Fully typed - pause before deleting
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
        // Deleting (reverse)
        if (progressRef.current > 0) {
          progressRef.current -= 1;
          setTyped(fullTextRef.current.slice(0, progressRef.current));
          timeoutRef.current = setTimeout(tick, TYPING_SPEED_MS);
        } else {
          // Fully deleted - pause before retyping
          isDeletingRef.current = false;
          timeoutRef.current = setTimeout(() => {
            if (!cancelled) {
              tick();
            }
          }, PAUSE_BEFORE_RETYPE_MS);
        }
      }
    };

    // Start typing after a small delay
    timeoutRef.current = setTimeout(tick, 300);

    return () => {
      cancelled = true;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [typedLines]);

  return (
    <div className="sector-back">
      <img src={cover} alt={title} className="sector-back-img" />
      <div className="sector-back-overlay">
        {name && <h4 className="sector-back-name">{name}</h4>}
        <h1 className="sector-back-title">{title}</h1>

        {typedLines && typedLines.length > 0 && (
          <div className="sector-back-typewriter-container">
            <p className="sector-back-typewriter-line">
              {typed}
              {isTypingComplete && <span className="sector-back-cursor sector-back-cursor-blink"></span>}
              {!isTypingComplete && typed && <span className="sector-back-cursor"></span>}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorBack;