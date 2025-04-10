import React from 'react'
import Dashboard from '../Dashboard'

const UserManagement = () => {
  return (
    <>
    <Dashboard>
        <div>
            <table className='w-full border-1'>
                <tr>
                    <th>
                        s.n
                    </th>
                    <th>
                        Names
                    </th>
                    <th>
                        actions
                    </th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>pratiik</td>
                        <td>remove</td>
                    </tr>
            </table>
            <div>
                <h5>Users Online</h5>
                <div>
                    <ul>
                        <li>pratik</li>
                        <li>rajeet</li>
                        <li>sajan</li>
                    </ul>
                </div>
            </div>
        </div>
    </Dashboard>
    </>
  )
}

export default UserManagement