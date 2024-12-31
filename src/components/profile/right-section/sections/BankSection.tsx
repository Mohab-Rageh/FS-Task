const BankSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6 flex-wrap">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Bank Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            CIB
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            IBAN
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            12346546413216446
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankSection;
