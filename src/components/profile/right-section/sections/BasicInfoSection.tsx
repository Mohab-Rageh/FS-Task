import React from "react";
import { type PersonData } from "../../../../types";
import { formatDate } from "../../../../helper";

const BasicInfoSection: React.FC<{ user: PersonData }> = ({ user }) => {
  return (
    <div className=" flex flex-col gap-6">
      {/* Row 1 */}
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            National ID Number
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.nationalId.idNumber}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            National ID Expiring Date
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {formatDate(user.nationalId.expiryDate.toString())}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Title
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {"Mr."}
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            First Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.firstName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Father Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.fatherName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Grand Father Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.grandfatherName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Family Name
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.familyName}
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            الاسم الأول
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.localizedName.firstName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            اسم الأب
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.localizedName.fatherName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            اسم الجد
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.localizedName.grandfatherName}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            اللقب / اسم العائلة
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.localizedName.familyName}
          </p>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Date of Birth
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {formatDate(new Date().toString())}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Gender
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {"Male"}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Nationality
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {"Egyptian"}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Additional Nationality
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.nationalities.map((item) => item.country.name).toString() ||
              "-"}
          </p>
        </div>
      </div>

      {/* Row 4 */}
      <div className="flex gap-6">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Passport No.
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {"A135464"}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Passport Issue Date
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {formatDate(new Date().toString())}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Passport Expiry Date
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {formatDate(new Date().toString())}
          </p>
        </div>
      </div>

      {/* Row 5 */}
      <div className="flex gap-6 ">
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Marital Status
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.maritalStatus.name}
          </p>
        </div>
        <div className="w-[248px]">
          <span className="text-[#737791] text-[12px] leading-[20px]">
            Dependencies
          </span>
          <p className="text-[16px] leading-[24px] font-medium text-[#151d48]">
            {user.dependants}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoSection;
