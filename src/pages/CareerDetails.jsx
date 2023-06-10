import { json, useParams , useLoaderData} from 'react-router-dom'
const CareerDetails = () => {
    const {id}= useParams()
    const career = useLoaderData()
    console.log(career)

    return (
      <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <p>Starting salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
        </div>
      </div>
  )
}

export default CareerDetails

export const CareerDetailsLoader = async ({params}) =>{
    const {id} = params

    const res = await fetch('http://localhost:4000/careers/'+ id)

    return res.json()
}