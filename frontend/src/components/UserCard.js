import {Table} from "react-bootstrap"
import { Link } from "react-router-dom"

const UserList= (props) => {

    const listUsers = () => {
        if (!props.Users)
            return null
        return props.Users.map((user, index) => {
            return(
                <tr key={index}>
                    <td><Link to={`${user.id}/usercanyons/`}> {user.user_name}</Link></td>
                </tr>
            )
        })
    }

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th> User Name</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    { listUsers( )}
                </tbody>
            </Table>
            

        </div>
    )
}

export default UserList