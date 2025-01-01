import React from "react";
import { type PersonData } from "../../../../types";
import { formatDate } from "../../../../helper";
import Row from "./section-components/Row";
import Description from "./section-components/Description";

const BasicInfoSection: React.FC<{ user?: PersonData }> = ({ user }) => {
  return (
    <div className=" flex flex-col gap-6">
      <Row>
        <Description
          label="National ID Number"
          value={user?.nationalId.idNumber}
        />
        <Description
          label="National ID Expiring Date"
          value={formatDate((user?.nationalId.expiryDate || "").toString())}
        />
        <Description label="Title" value="Mr." />
      </Row>

      <Row>
        <Description label="First Name" value={user?.firstName} />
        <Description label="Father Name" value={user?.fatherName} />
        <Description label="Grand Father Name" value={user?.grandfatherName} />
        <Description label="Family Name" value={user?.familyName} />
      </Row>

      <Row>
        <Description
          label="الاسم الأول"
          value={user?.localizedName.firstName}
        />
        <Description label="اسم الأب" value={user?.localizedName.fatherName} />
        <Description
          label="اسم الجد"
          value={user?.localizedName.grandfatherName}
        />
        <Description
          label="اللقب / اسم العائلة"
          value={user?.localizedName.familyName}
        />
      </Row>

      <Row>
        <Description label="Date of Birth" value={""} />
        <Description label="Gender" value="Male" />
        <Description label="Nationality" value="Egyptian" />
        <Description label="Additional Nationality" value={" - "} />
      </Row>

      <Row>
        <Description label="Passport No." value="A135464" />
        <Description label="Passport Issue Date" value={""} />
        <Description label="Passport Expiry Date" value={""} />
      </Row>

      <Row>
        <Description label="Marital Status" value={user?.maritalStatus.name} />
        <Description label="Dependencies" value={user?.dependants.toString()} />
      </Row>
    </div>
  );
};

export default BasicInfoSection;
