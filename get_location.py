# from geopy.geocoders import Nominatim
# from geopy.exc import GeocoderTimedOut
#
#
# my_address = input("Address: ")
#
# geolocator = Nominatim()
# try:
#     location = geolocator.geocode(my_address)
#     print(location.latitude, location.longitude)
# except GeocoderTimedOut:
#     print("Error: geocode failed on input with message")

from geopy import geocoders
g = geocoders.GoogleV3(api_key='AIzaSyCZ6Xf879FlLldO8hGRc16EggEHaVXcxRQ')

#create an input address string
#you can also build this by reading from an input database and building a string

inputAddress = input("Address: ")

#do the geocode
location = g.geocode(inputAddress, timeout=10)

#some things you can get from the result
print(location.latitude, location.longitude)
# print(location.raw)
print(location.address)
