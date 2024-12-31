import FileImage from "../../../../assets/File.svg";

const MilitaryStatus = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex gap-6 flex-wrap">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Require Travel Permit
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Yes
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Military Status
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            Exempted
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Document
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            <img
              className="cursor-pointer"
              src={FileImage}
              alt="file"
              width={136}
              height={30}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilitaryStatus;
