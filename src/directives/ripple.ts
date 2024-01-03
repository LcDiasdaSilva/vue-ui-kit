export const ripple = {
  mounted(
    el: {
      addEventListener: (arg0: string, arg1: (event: any) => void) => void;
      getBoundingClientRect: () => any;
      appendChild: (arg0: HTMLSpanElement) => void;
      removeChild: (arg0: HTMLSpanElement) => void;
    },
    binding: any
  ) {
    el.addEventListener(
      "click",
      function (event: { clientX: number; clientY: number }) {


        const ripple = document.createElement("span");
        ripple.className = "ripple-effect";


        const rect = el.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;


        el.appendChild(ripple);


        ripple.addEventListener("animationend", function () {
          el.removeChild(ripple);
        });
      }
    );
  },
};
