import { useEffect } from 'react';

import { useQuery } from 'react-query';
import { RecoilState, useRecoilState } from 'recoil';

const useRecoilQuery = <T>(
  recoilState: RecoilState<T>,
  key: string,
  getFunc: () => Promise<T>,
  staleTime = Infinity,
  suspense = true,
) => {
  const [state, setState] = useRecoilState(recoilState);
  const { isLoading, data } = useQuery(key, getFunc, {
    staleTime,
    suspense,
  });

  useEffect(() => {
    if (!data) return;

    setState(data);
  }, [data, setState]);

  return { state, isLoading };
};

export default useRecoilQuery;
