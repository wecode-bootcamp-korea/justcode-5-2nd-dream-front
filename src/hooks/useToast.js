import { useEffect } from 'react';

function useToast(state, setState) {
  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, 1500);
    }
  }, [state, setState]);
}

export default useToast;
