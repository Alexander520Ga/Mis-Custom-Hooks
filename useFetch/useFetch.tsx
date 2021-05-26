import { useEffect,  useRef,  useState } from "react"


const useFetch = (url:any) => {
  const isMounted = useRef(true)
  
    const [state, setstate] = useState<any>({data:null, loading:true, error:null})
  
    useEffect(() => {
     
        return () => {
          isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setstate({data:null,loading:true,error:null})

        fetch(url)
        .then(resp =>resp.json())
        .then(data =>{
            setTimeout(() => {
                if(isMounted.current){
                    setstate({
                        loading:false,
                        error:null,
                        data
                    })
                }
                
            },3000);
            
        })
    }, [url])
    return state
}

export default useFetch
