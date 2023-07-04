import { ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  setIsOpen(value: boolean): void;
  title: string;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, setIsOpen, title, children } = props;

  const backdrop = useRef(null);
  const container = useRef(null);
  const backdropMouseDown = useRef(false);
  const onKeyDown = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") setIsOpen(false);
    },
    [setIsOpen]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown, false);
    return () => document.removeEventListener("keydown", onKeyDown, false);
  }, [onKeyDown]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return createPortal(
    <CSSTransition classNames="fadeIn" nodeRef={backdrop} in={isOpen} timeout={240} unmountOnExit>
      <div
        ref={backdrop}
        onMouseDown={(evt) => {
          if (evt.target === backdrop.current) backdropMouseDown.current = true;
          else backdropMouseDown.current = false;
        }}
        onMouseUp={(evt) => {
          if (evt.target === backdrop.current && backdropMouseDown.current) setIsOpen(false);
        }}
        className={styles.root}
        aria-label="searchModalLabel"
      >
        <CSSTransition
          classNames="appears"
          nodeRef={container}
          in={isOpen}
          timeout={240}
          unmountOnExit
        >
          <div className={styles.container} ref={container} role="dialog">
            <div className={styles.header}>
              <h1 className={styles.title}>{title}</h1>
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="btn-close"
                aria-label="Close"
              />
            </div>
            <div>{children}</div>
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>,
    document.body
  );
};
