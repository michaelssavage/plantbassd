import { useEffect } from "react";
import Rellax from "rellax";

export default function useRellax() {
  useEffect(() => {
    new Rellax(".animate", {
      center: false,
      horizontal: false,
      round: true,
      speed: -7.5,
      vertical: true,
      wrapper: null,
    });
  }, []);
}
