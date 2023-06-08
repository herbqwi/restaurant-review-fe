import { useCallback, useEffect } from "react"

export const useLazyLoading = (loadMoreComments: any) => {

  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop == (document.documentElement.offsetHeight)) {
      loadMoreComments();
    }
  }, [loadMoreComments]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll])
}
