import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

import { Styles, Search, SearchIconWrap } from "./styles";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={Styles.toolbar}>
        <Typography variant="h5" sx={Styles.title}>
          Travel With V
        </Typography>
        <Box display="flex">
          <Typography variant="h6" sx={Styles.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete>*/}
          <Search>
            <SearchIconWrap>
              <SearchIcon />
            </SearchIconWrap>
            <InputBase placeholder="Search..." sx={Styles.inputRoot} />
          </Search>
          {/*</Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
