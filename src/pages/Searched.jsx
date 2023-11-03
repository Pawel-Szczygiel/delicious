import { useParams } from "react-router-dom"


const Searched = () => {
    const  { search }  = useParams()
    

  return (
    <div>
        searched  {search}
    </div>
  )
}

export default Searched
