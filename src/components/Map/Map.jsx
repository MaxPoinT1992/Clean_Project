import GoogleMapReact from "google-map-react";

import { Paper, Typography, useMediaQuery, Rating } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import mapStyles from "./mapStyles";

import { Styles, GoogleMapsWrapper, MarkerContainer } from "./styles";

function Map({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  setChildClicked,
  weatherData,
}) {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <GoogleMapsWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API,
        }}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          <MarkerContainer key={i} lat={place.latitude} lng={place.longitude}>
            {!isDesktop ? (
              <LocationOnIcon color="primary" fontSize="large" />
            ) : (
              <Paper elevation={3} sx={Styles.paper}>
                <Typography variant="subtitle2" gutterBottom>
                  {place.name}
                </Typography>
                <img
                  style={Styles.pointer}
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt={place.name}
                />
                <Rating size="small" value={Number(place.rating)} readOnly />
              </Paper>
            )}
          </MarkerContainer>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img
              src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
              height="70px"
            />
          </div>
        ))}
      </GoogleMapReact>
    </GoogleMapsWrapper>
  );
}

export default Map;
