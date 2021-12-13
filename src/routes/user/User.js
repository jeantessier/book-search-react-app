import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom";
import UserInfo from './UserInfo'
import UserReviews from './UserReviews'
import './User.css'

const USER_QUERY = gql`
  query MyUser($id: ID!) {
    user(id: $id) {
      name
      email
      reviews {
        id
        start
        book {
          id
          title
        }
      }
    }
  }
`

export default function User() {
    const { id } = useParams()

    const { loading, error, data } = useQuery(USER_QUERY, { variables: { id } })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { name, email, reviews } = data.user

    return (
        <div className="user">
            <UserInfo
                name={name}
                email={email}/>
            <UserReviews reviews={reviews}/>
        </div>
    )
}
