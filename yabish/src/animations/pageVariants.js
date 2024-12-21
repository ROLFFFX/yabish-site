export const pageVariants = {
  // 1. Expanding Circle Transition (Default)
  initial: {
    clipPath: "circle(0% at 50% 100%)", // Start as a small circle at the bottom
  },
  animate: {
    clipPath: "circle(150% at 50% 50%)", // Expand to cover the screen
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "circle(0% at 50% 0%)", // Shrinks back to the top
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  //-------------------------------------------------------------------------------------
  // 2.  Wipe Transition (Diagonal)
  // initial: {
  //   clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)", // Starts from the left edge
  // },
  // animate: {
  //   clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Fills the entire screen
  //   transition: {
  //     duration: 1,
  //     ease: "easeInOut",
  //   },
  // },
  // exit: {
  //   clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)", // Resets to the left edge
  //   transition: {
  //     duration: 1,
  //     ease: "easeInOut",
  //   },
  // },
  //-------------------------------------------------------------------------------------
  // 3. Circular Ripple Transition
  // initial: {
  //   clipPath: "circle(5% at 50% 50%)", // Small circle at the center
  // },
  // animate: {
  //   clipPath: "circle(150% at 50% 50%)", // Expands outward
  //   transition: {
  //     duration: 1,
  //     ease: "easeInOut",
  //   },
  // },
  // exit: {
  //   clipPath: "circle(5% at 50% 50%)", // Shrinks back to the center
  //   transition: {
  //     duration: 1,
  //     ease: "easeInOut",
  //   },
  // },
};
