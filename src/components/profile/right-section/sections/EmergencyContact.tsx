const EmergencyContact = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6 flex-wrap">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Emergency Contact Person Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            John John
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Emergency Relation
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Father
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Emergency Phone
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            011224477885
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContact;
