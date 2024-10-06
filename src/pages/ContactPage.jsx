
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

// Define the map container style
const containerStyle = {
    width: '100%',
    height: '800px',
}

// Define the center position of the map (latitude, longitude)
const center = {
    lat: 43.699389770804586,
    lng:-79.30198250792505
}

export const ContactPage = () => {

  return (
    <>
    <h1>Contact Page</h1>
    <h4>Address: Toronto, ON, Canada</h4>
    
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
            {/* Marker */}
            <Marker position={center}/>
        </GoogleMap>

    </LoadScript>
    </>

  )
}