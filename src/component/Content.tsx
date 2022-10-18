
import { useEffect, useState } from "react"
type Props={
    qty:number,
    format:string
}
const Content = ({qty,format}:Props) => {
const [content,setContent]=useState<string>("")


const fetcher = async()=> {
    let formatHelper=format==="Yes"?"html":"text"
    const data = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${qty}&format=${formatHelper}`)
    const result=await data.text()
    
    setContent(result)
}

useEffect(()=>{
fetcher()
},
[qty,format])

    return(
    <>
        {format==="No"?
      <div> {content}</div>
       :
       <div dangerouslySetInnerHTML={{__html: content}}></div>
    }
    </>)
}

export default Content