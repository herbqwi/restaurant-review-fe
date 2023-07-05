import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
  const [params, setParams] = useSearchParams();

  const myParams = useMemo(() => {
    const searchTermsFromURL = params.get('searchTerms') || "";
    const orderByFromURL = params.getAll('order') || [];
    const orderByAdvFromURL = params.getAll('services') || [];
    const orderByKitFromURL = params.getAll('cuisines') || [];
    const orderBySutFromURL = params.getAll('companies') || [];
    const orderByFromURL = params.getAll('sortedBy') || '';
  
    return {
      searchTermsFromURL,
      orderByFromURL,
      orderByAdvFromURL,
      orderByKitFromURL,
      orderBySutFromURL,
      orderByFromURL
    };
  }, [params]);


  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[] } value Parameter value.
   */
  const setParam = (name: string, value: string[]) => {
    const newParams = new URLSearchParams(params);
    newParams.delete(name);
    if (Array.isArray(value)) {
      value.forEach(item => newParams.append(name, item));
    } else if (value) {
      newParams.set(name, value);
    }
    setParams(newParams);
  };

  return { myParams, setParam };

};

export default useParams;
