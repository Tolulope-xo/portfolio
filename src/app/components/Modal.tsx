"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  const cursor = useRef(null);

  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container

    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });

    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    //Move cursor

    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    //Move cursor label

    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;

      xMoveContainer(pageX);

      yMoveContainer(pageY);

      xMoveCursor(pageX);

      yMoveCursor(pageY);

      xMoveCursorLabel(pageX);

      yMoveCursorLabel(pageY);
    });
  }, []);
  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          height: "350px",
          width: "400px",
          position: "absolute",
          backgroundColor: "white",
          overflow: "hidden",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            top: `${index * -100}%`,
            height: "100%",

            width: "100%",

            position: "absolute",

            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1",
          }}
        >
          {projects.map((project, index) => {
            const { src, color, lin } = project;
            return (
              <div
                key={`modal_${index}`}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: color,
                }}
              >
                <a href={lin}>
                  <Image src={src} width={300} height={0} alt="image" />
                </a>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        className="cursor"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "#455CE9",
          color: "white",
          position: "absolute",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 300,
          pointerEvents: "none",
        }}
      ></motion.div>

      <motion.div
        className="cursorLabel"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          color: "white",
          position: "absolute",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: 300,
          pointerEvents: "none",
        }}
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
