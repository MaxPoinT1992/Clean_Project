import { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

import { Styles, Search, SearchIconWrap } from "./styles";

function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  };

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
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Search>
              <SearchIconWrap>
                <SearchIcon />
              </SearchIconWrap>
              <InputBase placeholder="Search..." sx={Styles.inputRoot} />
            </Search>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
