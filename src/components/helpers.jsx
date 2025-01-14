import { forwardRef, useEffect, useState } from "react";
import InputMask from "react-text-mask";

const PhoneMask = forwardRef((props, ref) => {
  const handleFocus = () => {
    if (props && props.value) {
      props.onChange({
        target: {
          name: props.name,
          value: ref?.current?.value,
        },
      });
    }
  };

  return (
    <InputMask
      {...props}
      mask={[
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask={!!(props && props.value)}
      onFocus={handleFocus}
    />
  );
});

const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? false : "Invalid email address";
};

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export { validateEmail, useDeviceSize, PhoneMask };
