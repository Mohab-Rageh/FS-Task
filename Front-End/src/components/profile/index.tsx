import { useEffect, useState } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./right-section/RightSection";
import PersonFormDrawer from "./right-section/UpdateDrawer";
import { PersonData } from "../../types";
import { fetchUserData, updateUserData } from "../../api";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Profile = () => {
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<PersonData | null>(null);
  const [selectedSection, setSelectedSection] = useState(
    "personal-information"
  );

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const section = queryParams.get("section") || "personal-information"; // Default section if not provided
    setSelectedSection(section);
    document.title = "Profile";

    const fetchInitialUserData = async () => {
      setIsLoading(true);
      if (!userId) return;

      setUser((await fetchUserData(userId)).data.data.user);
      setIsLoading(false);
    };
    fetchInitialUserData();
  }, [userId]);

  return (
    <main className="flex gap-4 h-full">
      {/* Todo::  title need to be sent after fetching user data from the api */}
      <LeftSection
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        name={user?.firstName || ""}
        title="Senior Product Manager"
      />
      {isLoading && <CircularProgress size={40} />}

      <RightSection
        toggleDrawer={() => setOpen(!open)}
        selectedSection={selectedSection}
        user={user || undefined}
      />
      {user && open && (
        <>
          <PersonFormDrawer
            onSubmit={(data) => {
              setOpen(!open);

              updateUserData(userId || "", data);
            }}
            open={open}
            toggleDrawer={() => setOpen(!open)}
            personData={user}
          />
        </>
      )}

      {!user && !isLoading && (
        <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-gray-500">
          Couldn't fetch user data
        </div>
      )}
    </main>
  );
};

export default Profile;
