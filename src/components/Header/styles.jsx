import { styled, createTheme, alpha } from "@mui/system";

const Styles = {
  title: {
    display: { xs: "none", sm: "block" },
  },
  inputRoot: {
    color: "inherit",
    padding: (1, 1, 1, 0),
    paddingLeft: `calc(1em + 32px)`,
    width: { xs: "100%", md: "25ch" },
  },
  toolbar: { display: "flex", justifyContent: "space-between" },
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#cfd8dc", 0.15),
  "&:hover": { backgroundColor: alpha("#cfd8dc", 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
}));

const SearchIconWrap = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export { Styles, Search, SearchIconWrap };
