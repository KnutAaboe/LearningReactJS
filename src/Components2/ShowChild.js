import React, { useContext } from 'react'
import { UserContext } from "./FetchParent"

function ShowChild() {
    const user = useContext(UserContext)
    return (
        <div>
            {user.loading ? "Loading" : user.post && user.post.map(u => <p key={u.id}>{u.name}</p>)}
        </div>
    )
}

export default ShowChild