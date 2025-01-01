import { useEffect, useState } from "react";
import LeftSection from "./left-section";
import RightSection from "./right-section/RightSection";
import PersonFormDrawer from "./right-section/UpdateDrawer";
import { PersonData } from "../../types";
import { fetchUserData, updateUserData } from "../../api";
import { useParams } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const Profile = () => {
  const { userId } = useParams();
  const [open, setOpen] = useState(false);
  const [fetchError, setFetchError] = useState(false);
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

      try {
        setUser((await fetchUserData(userId)).data.data.user);
      } catch {
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialUserData();
  }, [userId]);
  const handleClose = () => setFetchError(false);

  return (
    <main className="flex gap-4 h-full">
      <Snackbar
        open={fetchError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={"error"} variant="filled">
          {"Couldn't fetch user data"}
        </Alert>
      </Snackbar>

      {/* Todo::  title need to be sent after fetching user data from the api */}
      <LeftSection
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
        name={user?.firstName || ""}
        title="Senior Product Manager"
      />

      <RightSection
        isLoading={isLoading}
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
    </main>
  );
};

export default Profile;
