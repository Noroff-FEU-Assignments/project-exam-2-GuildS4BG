import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import moment from "moment";

function DatePickerForm() {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleCheckInDate = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
    };

    const handleCheckOutDate = (date) => {
        setCheckOutDate(date);
    };

    return (
        <div className="DatePickerForm">
            <div className="input-container">
                <div>
                    <label>Check-in</label>
                    <DatePicker selected={checkInDate} minDate={new Date()} onChange={handleCheckInDate} />
                </div>
                <div>
                    <label>Check-out</label>
                    <DatePicker selected={checkOutDate} minDate={checkOutDate} onChange={handleCheckOutDate} />
                </div>
            </div>
            {/* {checkInDate && checkOutDate && (
                <div className="summary">
                    <p>
                    You book a hotel from {moment(checkInDate).format("LL")} to{" "} {moment(checkOutDate).format("LL")}.
                    </p>
                </div>
            )} */}
        </div>
    );
}

export default DatePickerForm
