import { useEffect } from "react";
import {
  Drawer,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { type PersonData } from "../../../types";

const PersonFormDrawer = ({
  personData,
  open,
  toggleDrawer,
  onSubmit,
}: {
  open: boolean;
  personData: PersonData;
  toggleDrawer: () => void;
  onSubmit: (data: unknown) => void;
}) => {
  const { control, handleSubmit, setValue, reset } = useForm();

  // Set the form's initial values with user data
  useEffect(() => {
    setValue("firstName", personData.firstName);
    setValue("fatherName", personData.fatherName);
    setValue("grandfatherName", personData.grandfatherName);
    setValue("familyName", personData.familyName);
    setValue("localizedName.firstName", personData.localizedName.firstName);
    setValue("localizedName.fatherName", personData.localizedName.fatherName);
    setValue(
      "localizedName.grandfatherName",
      personData.localizedName.grandfatherName
    );
    setValue("localizedName.familyName", personData.localizedName.familyName);
    setValue("nationalId.idNumber", personData.nationalId.idNumber);
    setValue("nationalId.expiryDate", personData.nationalId.expiryDate);
    setValue("nationalities", personData.nationalities);
    setValue("maritalStatus", personData.maritalStatus.id);
    setValue("dependants", personData.dependants);
  }, [
    personData.dependants,
    personData.familyName,
    personData.fatherName,
    personData.firstName,
    personData.grandfatherName,
    personData.localizedName.familyName,
    personData.localizedName.fatherName,
    personData.localizedName.firstName,
    personData.localizedName.grandfatherName,
    personData.maritalStatus.id,
    personData.nationalId.expiryDate,
    personData.nationalId.idNumber,
    personData.nationalities,
    setValue,
  ]);

  // Handle form submission
  const onSubmitForm = (data: unknown) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer()}>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          style={{ padding: 20, width: 400 }}
        >
          <h2>Edit Person Information</h2>

          {/* First Name */}
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Father Name */}
          <Controller
            name="fatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Father Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Grandfather Name */}
          <Controller
            name="grandfatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Grandfather Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Family Name */}
          <Controller
            name="familyName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Family Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Localized First Name */}
          <Controller
            name="localizedName.firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized First Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Localized Father Name */}
          <Controller
            name="localizedName.fatherName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Localized Father Name"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* National ID */}
          <Controller
            name="nationalId.idNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="National ID"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* National ID Expiry Date */}
          <Controller
            name="nationalId.expiryDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type="date"
                label="ID Expiry Date"
                fullWidth
                margin="normal"
              />
            )}
          />

          {/* Marital Status */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Marital Status</InputLabel>
            <Controller
              name="maritalStatus"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Marital Status">
                  <MenuItem value="single">Single</MenuItem>
                  <MenuItem value="married">Married</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          {/* Dependants */}
          <Controller
            name="dependants"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Dependants"
                type="number"
                fullWidth
                margin="normal"
                InputProps={{ inputProps: { min: 0 } }}
              />
            )}
          />

          <div style={{ marginTop: 20 }}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button
              onClick={() => toggleDrawer()}
              variant="outlined"
              color="secondary"
              style={{ marginLeft: 10 }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default PersonFormDrawer;
