import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import './styles/LocationMaker.scss';

const LocationMaker = () => {
	const [position, setPosition] = useState(null)
	const map = useMapEvents({
		click(e) {
			map.locate()
			setPosition(e.latlng)
		},

	})


	return position === null ? null : (
		<Marker position={position}>
			<Popup>{JSON.stringify(position)}</Popup>
		</Marker>
	)
};

export default LocationMaker;
