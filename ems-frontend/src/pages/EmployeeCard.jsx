import React from 'react';

const EmployeeCard = ({ name, email, position, phoneNumber }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4">
      <div className="font-bold text-xl mb-2">{name}</div>
      <p className="text-gray-700 text-base">
        Position: {position}
      </p>
      <p className="text-gray-700 text-base">
        Email: {email}
      </p>
      <p className="text-gray-700 text-base">
        Phone: {phoneNumber}
      </p>
    </div>
  );
}

export default EmployeeCard;
