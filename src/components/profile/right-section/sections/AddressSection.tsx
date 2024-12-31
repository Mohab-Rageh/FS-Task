const AddressSection = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Country
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Egypt
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            City
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Cairo
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Postal Code
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            11728
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Building
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            7
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Street
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Street 127
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Floor No.
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            7
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Apartment
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            72
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
