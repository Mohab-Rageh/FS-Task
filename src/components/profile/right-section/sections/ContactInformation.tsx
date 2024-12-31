export const ContactInformation = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6 flex-wrap">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Personal Email
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            John.smith@gmail.com
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Mobile
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            011223344556
          </p>
        </div>
      </div>
    </div>
  );
};
