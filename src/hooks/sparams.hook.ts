import { useSearchParams } from "react-router-dom";


const useSParams = <T>(key: string) => {
  const [params, setParams] = useSearchParams();

  const setParam = (value: T) => {
    if (value == null) {
      params.delete(key)
    } else {
      params.set(key, JSON.stringify(value))
    }
    setParams(params);
  };

  const getParam = () => {
    const value = params.get(key) as T;
    if (value == `false`) return false;
    return value ?? null
  }

  const compare = (str?: string) => {
    return str?.toLowerCase().includes((getParam() as string).toLowerCase());
  }

  return [getParam(), setParam, compare] as const
}

export default useSParams;
