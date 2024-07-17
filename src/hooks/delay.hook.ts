import { useEffect, useState } from "react";

export default function useDelay(delay: number) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, delay * 1000);
  }, [])

  return isActive;
}