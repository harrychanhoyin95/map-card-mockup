import { withRouter } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import history from '../../history';

import Card from '../../components/Card/Card'

import './DetailPage.css'

const DetailPage = () => {
  const { location: { state: data } } = history
  const { picture, name, email, location: { latitude, longitude } } = data
  console.log('data', data)
  const position = [latitude, longitude]

  return (
    <div className="detail__container">
      <MapContainer center={position} zoom={8} style={{ height: '300px' }}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
        </Marker>
      </MapContainer>
      <div className="detail__card-container">
        <Card picture={picture} name={name} email={email} />
      </div>
    </div>
  )
}

export default withRouter(DetailPage);
