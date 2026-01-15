import React, { useState } from "react";
import { MdEventSeat } from "react-icons/md";
import Swal from "sweetalert2";

const Store = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const ticketSelect = (e) => {
    e.preventDefault();
    const seat = e.target.value;
    if (seat === undefined) {
      return;
    }

    setSelectedSeat((prev) => {
      if (prev.includes(seat)) {
        return prev.filter((s) => s !== seat);
      } else {
        return [...prev, seat];
      }
    });
  };
  const totalTicket = selectedSeat.length;
  const ticketPrice = totalTicket * 650;

  const handelSubmitTicket = (e) => {
    e.preventDefault();
    if (totalTicket <= 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Select at last 1 seat!",
        footer: "Press a seat number to select it",
      });
      return;
    }
    const startFrome = e.target.startFrom.value;
    const endTo = e.target.endTo.value;
    if (startFrome === endTo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Start and End destination is same!",
        footer: "Change start or end destination",
      });
      return;
    }
    const passengerName = e.target.name.value;
    const passengerNumber = e.target.number.value;

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won to Confirm this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Confirm it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Confirmed!",
            text: "Your Ticket has been confirm.",
            icon: "success",
          });
          console.log(
            passengerName,
            passengerNumber,
            totalTicket,
            ticketPrice,
            selectedSeat,
            startFrome,
            endTo
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your ticket is not confirmed",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="mt-20 md:w-10/12 mx-auto bg-white/30 p-5">
      <h2 className="text-center text-2xl font-bold">
        Danif Bus <span className="text-green-300">Ticket</span> <br />{" "}
        <span className="text-white/70">Buy Online</span>
      </h2>
      <div className="bg-black rounded-xl px-4">
        <h2 className="text-center mt-5 border-b border-dashed font-bold">
          Seat Status
        </h2>
        <div className="grid grid-cols-3 text-center">
          <h2>
            <MdEventSeat className="mx-auto text-2xl " /> Available
          </h2>
          <h2>
            <MdEventSeat className="mx-auto text-2xl text-green-300" /> Selected
          </h2>
          <h2>
            <MdEventSeat className="mx-auto text-2xl text-white/60" /> Not
            Available
          </h2>
        </div>
      </div>
      <div className="mt-10 grid md:grid-cols-2">
        <div>
          <div className="px-10">
            <h2 className="border-b border-dashed text-center font-bold">
              Select Your Seat
            </h2>
          </div>
          <div>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">A</h2>
              <button value={"A1"} className="btn hover:bg-green-700">
                A1
              </button>
              <button value={"A2"} className="btn hover:bg-green-700">
                A2
              </button>
              <div></div>
              <button value={"A3"} className="btn hover:bg-green-700">
                A3
              </button>
              <button value={"A4"} className="btn hover:bg-green-700">
                A4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">B</h2>
              <button value={"B1"} className="btn hover:bg-green-700">
                B1
              </button>
              <button value={"B2"} className="btn hover:bg-green-700">
                B2
              </button>
              <div></div>
              <button value={"B3"} className="btn hover:bg-green-700">
                B3
              </button>
              <button value={"B4"} className="btn hover:bg-green-700">
                B4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">C</h2>
              <button value={"C1"} className="btn hover:bg-green-700">
                C1
              </button>
              <button value={"C2"} className="btn hover:bg-green-700">
                C2
              </button>
              <div></div>
              <button value={"C3"} className="btn hover:bg-green-700">
                C3
              </button>
              <button value={"C4"} className="btn hover:bg-green-700">
                C4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">D</h2>
              <button value={"D1"} className="btn hover:bg-green-700">
                D1
              </button>
              <button value={"D2"} className="btn hover:bg-green-700">
                D2
              </button>
              <div></div>
              <button value={"D3"} className="btn hover:bg-green-700">
                D3
              </button>
              <button value={"D4"} className="btn hover:bg-green-700">
                D4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">E</h2>
              <button value={"E1"} className="btn hover:bg-green-700">
                E1
              </button>
              <button value={"E2"} className="btn hover:bg-green-700">
                E2
              </button>
              <div></div>
              <button value={"E3"} className="btn hover:bg-green-700">
                E3
              </button>
              <button value={"E4"} className="btn hover:bg-green-700">
                E4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">F</h2>
              <button value={"F1"} className="btn hover:bg-green-700">
                F1
              </button>
              <button value={"F2"} className="btn hover:bg-green-700">
                F2
              </button>
              <div></div>
              <button value={"F3"} className="btn hover:bg-green-700">
                F3
              </button>
              <button value={"F4"} className="btn hover:bg-green-700">
                F4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">G</h2>
              <button value={"G1"} className="btn hover:bg-green-700">
                G1
              </button>
              <button value={"G2"} className="btn hover:bg-green-700">
                G2
              </button>
              <div></div>
              <button value={"G3"} className="btn hover:bg-green-700">
                G3
              </button>
              <button value={"G4"} className="btn hover:bg-green-700">
                G4
              </button>
            </form>
            <form
              onClick={ticketSelect}
              className="grid grid-cols-6 gap-1 mt-2"
            >
              <h2 className="btn bg-amber-600">H</h2>
              <button value={"H1"} className="btn hover:bg-green-700">
                H1
              </button>
              <button value={"H2"} className="btn hover:bg-green-700">
                H2
              </button>
              <div></div>
              <button value={"H3"} className="btn hover:bg-green-700">
                H3
              </button>
              <button value={"H4"} className="btn hover:bg-green-700">
                H4
              </button>
            </form>
          </div>
        </div>
        <form onSubmit={handelSubmitTicket}>
          <div className="px-10">
            <h2 className="text-center font-bold border-b border-dashed ">
              Ticket Details
            </h2>
          </div>
          <div className="md:px-5">
            <h2 className="font-bold">Select Your Route</h2>

            <label className=" label">Destination Start From</label>
            <select name="startFrom" className="select">
              <option value="" disabled>
                From
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>

            <label className=" label">Destination End To</label>
            <select name="endTo" className="select">
              <option value="" disabled>
                From
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Cox's Bazar">Cox's Bazar</option>
            </select>

            <div className="bg-white/35 rounded-2xl  mt-4 p-4">
              <h2 className="text-center">Ticket Details</h2>
              <div className="">
                <h2>
                  Total Set: {totalTicket} || SeatNumber {selectedSeat}
                </h2>
                <h2>Total Price: {ticketPrice}</h2>
                <div>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Passengers name?
                    </legend>
                    <input
                      type="text"
                      name="name"
                      className="input"
                      placeholder="Type here"
                      required
                      title="Enter Passenger name here"
                      defaultValue={"Akash"}
                    />
                  </fieldset>
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend">
                      Passengers number?
                    </legend>
                    <input
                      type="tel"
                      name="number"
                      className="input"
                      required
                      maxLength={11}
                      placeholder="01XXXXXXXXX"
                      pattern="^01[3-9][0-9]{8}$"
                      title="Enter valid 11 digit Bangladeshi mobile number"
                    />
                  </fieldset>
                  <div className="flex justify-center mt-2">
                    <button type="submit" className="btn ">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Store;
