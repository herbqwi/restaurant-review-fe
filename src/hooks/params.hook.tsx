import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useParams = () => {
  const [params, setParams] = useSearchParams();

  const myParams = useMemo(() => {
    const searchTermsURL = params.get('searchTerms') || '';
    const servicesURL = params.getAll('services') || [];
    const cuisinesURL = params.getAll('cuisines') || [];
    const companiesURL = params.getAll('companies') || [];
    const orderByURL = params.get('sortedBy') || '';

    return {
      searchTermsURL,
      servicesURL,
      cuisinesURL,
      companiesURL,
      orderByURL
    };
  }, [params]);


  /**
   * Set query string parameter.
   * @param {string} name Parameter name.
   * @param {string | string[] } value Parameter value.
   */
  const setParam = (name: string, value: string | string[]) => {
    const newParams = new URLSearchParams(params);
    newParams.delete(name);
    if (Array.isArray(value)) {
      for (const item of value) {
        newParams.append(name, item);
      }
    } else if (value) {
      newParams.set(name, value);
    }
    setParams(newParams);
  };


  return { myParams, setParam };

};

export default useParams;
