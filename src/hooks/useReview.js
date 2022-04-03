import { useEffect, useState } from "react"

const useJson= (json) => {
    const [jsonLoad, setJson] = useState([])
    useEffect(()=>{
        fetch(`/JSON/${json}.json`)
        .then(res=>res.json())
        .then(data=>setJson(data))
    },[json])
    return jsonLoad;
}
export default useJson;