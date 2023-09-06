import { singleUser } from "../../data"
import Single from "../single/Single"
import "./User.scss"

function User() {
  return (
    <div>
      <Single {...singleUser}/>
    </div>
  )
}

export default User
