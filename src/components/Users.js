import React, { useEffect, useState } from 'react';

const Users = () => {

    const [user, setUser] = useState([]);

    const getData = async () => {
        const response = await fetch("https://assessment.api.vweb.app/users");
        const data = await response.json();
        console.log(data)
        setUser(data);
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <h2>Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    <div className="col-6 mx-auto  table-striped " >
                        <table className="table" cellpadding="0" cellspacing="0" border="0">
                            <thead>
                                <tr>
                                    <th scope="col">#Id</th>
                                    <th scope="col">Name</th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    user.map((curElement) => {
                                        const { user_id, name } = curElement;
                                        return (
                                            <tr key={user_id}>
                                                <th scope="row">{user_id}</th>
                                                <td>{name}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Users;