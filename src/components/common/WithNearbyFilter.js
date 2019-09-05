import React from 'react'


function calculateDistance(lat,lon,userLat,userLon){

  const distance = ( 6371 * Math.acos( Math.cos( Math.radians(lat) ) * Math.cos( Math.radians( userLat ) )
                    * Math.cos( Math.radians( userLon) - Math.radians(lon) ) + Math.sin( Math.radians(lat) ) * Math.sin(Math.radians(userLat)) ) )*1000
  return distance
}

function handleNearbyExhibitions(exhibitions, userLocation) {
  exhibitions = exhibitions.filter(exhibition => {
    return (calculateDistance(userLocation.longitude, userLocation.latitude, exhibition.lng, exhibition.lat) < 2000)
  })
  return exhibitions
}




function WithFilter(Component) {
  return function WithFilterComponent({ exhibitions, userLocation, ...props }) {
    if(!userLocation) return (<Component
      filteredExhibitions={exhibitions}
      {...props}
    />)
    return (<Component
      filteredExhibitions={handleNearbyExhibitions(exhibitions, userLocation)}
      {...props}
    />)
  }
}

export default WithFilter
