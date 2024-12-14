import React from "react";

const Button = ({ txt, color = "6", className }) => (
  <div
    className={`rounded-[16px] bg-prim-${color} flex justify-center items-center font-bold ${className}`}
  >
    {txt}
  </div>
);

function AddTranInputAmt() {
  return (
    <div className="w-full h-[200px] bg-prim-5 grid grid-cols-4 grid-rows-4 gap-1 p-1 ">
      <Button txt="1" />
      <Button txt="2" />
      <Button txt="3" />
      <Button txt="+" color="3" className="text-text-l" />
      <Button txt="4" />
      <Button txt="5" />
      <Button txt="6" />
      <Button txt="-" color="3" className="text-text-l" />
      <Button txt="7" />
      <Button txt="8" />
      <Button txt="9" />
      <div className="rounded-[16px] bg-acct-2 text-text-l flex justify-center items-center font-bold">
        Split
      </div>
      <Button txt="0" />
      <Button txt="00" />
      <Button txt="000" />
      <div className="rounded-[16px] bg-acct-6 text-text-l flex justify-center items-center font-bold">
        Done
      </div>
    </div>
  );
}

export default AddTranInputAmt;
