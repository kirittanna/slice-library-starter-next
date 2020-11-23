import { useEffect } from "react";

// Use any event on window. Optionally, add a condition for when to add the event listener to window.
function useEvent(eventName, eventHandler, condition = true) {
  useEffect(
    () => {
      if (condition) {
        window.addEventListener(eventName, eventHandler);
      } else {
        window.removeEventListener(eventName, eventHandler);
      }
      return () => {
        window.removeEventListener(eventName, eventHandler);
      };
    },
    [condition]
  );
}

export function useKeyDown(eventHandler, condition = true) {
  useEvent("keydown", e => eventHandler(e), condition);
}

// Invoke the passed callback function if one of the specified keys have been pressed.
export function useKeyDownOnly(keyCodes, eventHandler, condition = true) {
  useKeyDown(
    ({ key }) => keyCodes.includes(key) && eventHandler(key),
    condition
  );
}
