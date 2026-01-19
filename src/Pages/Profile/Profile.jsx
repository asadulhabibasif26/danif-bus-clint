import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const Profile = () => {
  const { user } = useAuth();
  const email = user.email;
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/tickets?email=${email}`)
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error("error fetching ticket", error));
  }, [email]);

  const handelTicketDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tickets/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              window.location.reload();
            }
          });
      }
    });
  }

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
      <h2 className="text-white mt-3 font-bold text-white/70">{email}</h2>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{ticket.name}</td>
                <td>{ticket.number}</td>
                <td>{ticket.destination.startFrome}</td>
                <td>{ticket.destination.endTo}</td>
                <td>{ticket.seat}</td>
                <td>{ticket.date}</td>
                <td onClick={() => handelTicketDelete(ticket._id)} className="btn hover:bg-red-200 bg-red-500">
                  <FaDeleteLeft className="text-2xl" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
