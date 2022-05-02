import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

export default function useKeyboard(): number {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    const subscriptionOnShow = Keyboard.addListener(
      "keyboardWillShow",
      onKeyboardShow,
    );
    const subscriptionOnHide = Keyboard.addListener(
      "keyboardWillHide",
      onKeyboardHide,
    );
    return () => {
      subscriptionOnShow.remove();
      subscriptionOnHide.remove();
    };
  }, []);

  return keyboardHeight;
}
