import { useEffect } from 'react'

export const useInitialize = (initialCallBack: () => void) => {
  useEffect(() => {
    initialCallBack()
  }, [])
}
