import { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./right-section/RightSection";

const fakePersonData = {
  firstName: "John",
  fatherName: "Michael",
  grandfatherName: "Edward",
  familyName: "Doe",
  localizedName: {
    firstName: "جون",
    fatherName: "مايكل",
    grandfatherName: "إدوارد",
    familyName: "دو",
  },
  nationalId: {
    idNumber: "12345678901234",
    expiryDate: new Date("2025-04-01"), // ISO date
  },
  nationalities: [
    {
      country: {
        id: "EG",
        name: "Egypt",
      },
      countryId: 1,
    },
    {
      country: {
        id: "US",
        name: "United States",
      },
      countryId: 2,
    },
  ],
  maritalStatus: {
    id: "M",
    name: "Married",
  },
  dependants: 3,
};

const Profile = () => {
  const [selectedSection, setSelectedSection] = useState(
    "personal-information"
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const section = queryParams.get("section") || "personal-information"; // Default section if not provided
    setSelectedSection(section);
  }, []);

  return (
    <main className="flex gap-4 h-full">
      {/* Todo:: Name, title need to be sent after fetching user data from the api */}
      <LeftSection
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        name="John Smith"
        title="Senior Product Manager"
      />

      <RightSection selectedSection={selectedSection} user={fakePersonData} />
    </main>
  );
};

export default Profile;
