/*
* Tekijä Ari Tenhunen
 */


import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import {Marker} from '@react-google-maps/api';

import useStyles from './styles';
import './Marker.css';

const Map = ({setCoordinates, setBounds, coordinates, places, markers})=> {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    const [user, setUser] = useState('');
    const [users, setUsers] = useState([]);

    const Marker = ({ text, url }) =>
        <div className="markkeri">
            <div className="pin bounce"></div>
            <div className="pulse"></div>
            <div className="sisalto">
                <h3>{text}</h3>
                <img src={url} alt="alternatetext" height="auto" width="100px" />
            </div>

        </div>;

    const handleChange = (event) => {

        event.preventDefault();

        setUser(event.target.value);

    }

    return (
        <div className={classes.mapContainer}>
          <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyDkaIAq2l6wA4bJYafEwzPCREl8ZG8O6XY'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                  setCoordinates({lat: e.center.lat, lng: e.center.lng});
                  setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
            >
              {places?.map((place, i) => (
                  <div
                      className={classes.markerContainer}
                      lat={Number(place.latitude)}
                      lng={Number(place.longitude)}
                      key={i}
                  >  {
                    !isDesktop ? (
                        <LocationOnOutlinedIcon color="primary" fontSize="large" />
                    ) : (
                        <Paper elevation={3} className={classes.paper}>
                          <Typography className={classes.typography} gutterBottom>
                            {place.name}
                          </Typography>
                          <Rating size="small" value={Number(place.rating)} readOnly />
                        </Paper>
                    )}
                  </div>
              ))}
                {markers && markers.map((marker) => (
                    <Marker
                        key={marker.time.toISOString()}
                        lat={marker.lat}
                        lng={marker.lng}
                        text={marker.sahkoposti}
                        url={'http://localhost:8080/' + marker.kuva}
                    />
                ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map;