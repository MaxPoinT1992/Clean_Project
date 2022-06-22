import { styled, createTheme, alpha } from "@mui/system";

const Styles = {
  paper: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "100px",
  },
  pointer: {
    cursor: "pointer",
  },
};

const GoogleMapsWrapper = styled("div")(({ theme }) => ({
  height: "85vh",
  width: "100%",
}));

const MarkerContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  "&:hover": { zIndex: 2 },
}));

export { Styles, GoogleMapsWrapper, MarkerContainer };
