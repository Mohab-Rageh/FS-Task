import type { PersonData } from "../../../types";
import AddressSection from "./sections/AddressSection";
import BankSection from "./sections/BankSection";
import BasicInfoSection from "./sections/BasicInfoSection";
import { ContactInformation } from "./sections/ContactInformation";
import DrivingSection from "./sections/DrivingSection";
import EmergencyContact from "./sections/EmergencyContact";
import MilitaryStatus from "./sections/MilitaryStatus";
import SectionWrapper from "./SectionWrapper";

const RightSection = ({
  user,
  selectedSection,
}: {
  user: PersonData;
  selectedSection: string;
}) => {
  return (
    <div className="flex-grow h-full overflow-hidden">
      <ul className="flex flex-col gap-6 pr-2  overflow-y-auto h-full ">
        {/* Todo:: onEdit Should open the edit drawer */}
        {selectedSection === "personal-information" && (
          <>
            <SectionWrapper onEdit={() => null} title="Basic Information">
              <BasicInfoSection user={user} />
            </SectionWrapper>

            <SectionWrapper title="Contact Information">
              <ContactInformation />
            </SectionWrapper>

            <SectionWrapper title="Emergency Contacts">
              <EmergencyContact />
            </SectionWrapper>

            <SectionWrapper title="Address Details">
              <AddressSection />
            </SectionWrapper>

            <SectionWrapper title="Driving License Details">
              <DrivingSection />
            </SectionWrapper>

            <SectionWrapper title="Military Status">
              <MilitaryStatus />
            </SectionWrapper>
          </>
        )}

        {selectedSection === "financial-information" && (
          <SectionWrapper title="Bank Information">
            <BankSection />
          </SectionWrapper>
        )}
      </ul>
    </div>
  );
};

export default RightSection;
