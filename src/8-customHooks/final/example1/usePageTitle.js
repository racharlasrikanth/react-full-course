import { useEffect } from "react";

function usePageTitle(count) {
  useEffect(() => {
    document.title = `count - ${count}`;
  }, [count]);
}

export default usePageTitle;
