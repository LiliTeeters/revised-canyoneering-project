import CanyoneeringAPI from '../api/CanyoneeringAPI';
import { useNavigate, useParams } from "react-router-dom"


function DeleteCanyonPage(props) {
  // params
  const params = useParams()
  const navigate = useNavigate()
  const token = localStorage.getItem("auth-user")

 // handler
  const deleteCanyonObj = async () => {
    const data = await CanyoneeringAPI.deleteCanyon(params.canyonID, token)
    if (data) {
      navigate("/")
    }
  }

  const Home = async () => {
    navigate("/")
  }

  return (
    <div>
      <br />
      <br />
      Are you positively positive you want to delete this canyon?
      <br />
      <br />
      <button onClick={ deleteCanyonObj }>Yes</button>
      <button onClick={ Home } >No</button>
    </div>
  )
}

export default DeleteCanyonPage;