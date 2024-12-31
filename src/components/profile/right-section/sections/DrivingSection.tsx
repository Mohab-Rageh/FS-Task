const DrivingSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Driving License
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Yes
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Driving License Type
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            C1E
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Driving License expiry date
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            01 / 04 / 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrivingSection;
