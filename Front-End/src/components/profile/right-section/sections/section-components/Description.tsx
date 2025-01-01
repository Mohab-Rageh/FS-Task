import React from "react";

const Description = ({
  label,
  value,
}: {
  label: React.ReactNode;
  value?: React.ReactNode;
}) => {
  return (
    <div className="w-[248px]">
      <span className="text-[#737791] text-[12px] leading-[20px]">{label}</span>
      <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
        {value}
      </p>
    </div>
  );
};

export default Description;
