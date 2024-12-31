import { Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export const LeftSide = ({ name }: { name: string }) => {
  const breadcrumbs = [
    <Link
      key="1"
      className="text-[12px]"
      underline="hover"
      color="#959fb0"
      href="/"
    >
      <span className="text-[12px]">Dashboard</span>
    </Link>,
    <Link
      key="2"
      className="text-[12px]"
      underline="hover"
      color="#959fb0"
      href="/"
    >
      <span className="text-[12px]">HR manage</span>
    </Link>,
    <Link
      key="3"
      className="text-[12px]"
      underline="hover"
      color="#959fb0"
      href="/"
    >
      <span className="text-[12px]">Employees</span>
    </Link>,
    <Typography key="4" sx={{ color: "text.primary" }}>
      <span className="text-[12px] text-[#003fad]">{name} Profile</span>
    </Typography>,
  ];

  return (
    <div>
      <h1 className="font-semibold text-[26px] leading-[39px] text-[#151d48]">
        {name} Profile
      </h1>
      <nav className="text-[26px]">
        <Stack spacing={2}>
          <Breadcrumbs
            separator={
              <NavigateNextIcon className="text-[#459AFF]" fontSize="small" />
            }
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </nav>
    </div>
  );
};
