import React from "react";
import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-44 rounded-full ring-2 ring-offset-2">
          <img src={user.photoURL} />
        </div>
      </div>
      <h2 className="text-white mt-3 font-bold text-2xl">
        {user?.displayName}
      </h2>
      <h2 className="text-white mt-3 font-bold text-white/70">{user?.email}</h2>
      <div>
        <h2 className="mt-5 btn bg-purple-400 rounded-2xl">Ticket You Buy</h2>
      </div>
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>passengers Name</th>
              <th>Number</th>
              <th>From</th>
              <th>To</th>
              <th>Seat Number</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Asadul Habib Asif</td>
              <td>01799954218</td>
              <td>Dhaka</td>
              <td>Syleht</td>
              <td>B2</td>
              <td>1-19-26</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
