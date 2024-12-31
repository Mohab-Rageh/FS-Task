import { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./right-section/RightSection";
import PersonFormDrawer from "./right-section/UpdateDrawer";

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
  const [open, setOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(
    "personal-information"
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const section = queryParams.get("section") || "personal-information"; // Default section if not provided
    setSelectedSection(section);
    document.title = "Profile";
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

      <RightSection
        toggleDrawer={() => setOpen(!open)}
        selectedSection={selectedSection}
        user={fakePersonData}
      />

      <PersonFormDrawer
        onSubmit={(data) => {
          setOpen(!open);
          console.log(data);
        }}
        open={open}
        toggleDrawer={() => setOpen(!open)}
        personData={fakePersonData}
      />
    </main>
  );
};

export default Profile;
