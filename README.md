# WEB- sovelluskehitys 2

## CHAT- JA KARTTASOVELLUS

### Tekijä

<ul>
<li>Ari Tenhunen</li>
</ul>

### Sivuston kuvaus

Kaikille ihmis- ryhmille tarkoitettu keskustelu- sivusto, jolla voi myös esim. sopia tapaamisen perustuen kartalta haettuihin tietoihin,
tai vaikkapa keskustella säästä. Eri paikkojen sää- tietoja voi hakea kartta- sivulla olevalla haku- toiminnolla.

![alt text](https://lh3.googleusercontent.com/drive-viewer/AFGJ81q4Ahc20LowQPt4vsMrBbYUq07-Dxdi-fw9W5Q0H5kqkNcKR10oB5AozuRq3eMVRturJnh3n2GmpQdkNpqrNsfqxkMOCw=s2560)

# Asennusohjeet

## MariaDB

SQL-tiedosto chatti_db löytyy projektin tietokanta kansiosta.

Käynnistä sovelluksen sisäinen tietokanta juuressa.

```
docker compose up
```

## Frontend ja Backend


Asenna riippuvuudet.

```
npm install
```

Käynnistä kehitysympäristö.

```
npm start
```

Luo .env tiedosto projektin juureen tietokantayhteyttä varten.

Esimerkkisisältö:

```
DB_PORT=3306
DB_USER=root
DB_PASSWORD=1234
DB_NAME=chatti_db
```

Käynnistä kehitysympäristö.

```
npm run dev
```


## Rajapinnat:

### Firebase kirjautumisvaihtoehdot

<ul>
<li>Google</li>
<li>Facebook</li>
<li>Microsoft</li>
<li>Github</li>
</ul>

### Kartta

#### export const getPlacesData = async (type, sw, ne) => {
####  try {
####  const { data: {data} } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
####  headers: {
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    'x-rapidapi-key': '8c1266121emshf5fa837039404cbp172651jsn87935b868c55'
  }
});'

### Esimerkki palautus- JSON- muodossa

{2 items
"data":[6 items
0:{3 items
"result_type":"things_to_do"
"result_object":{19 items
"location_id":"188151"
"name":"Eiffel Tower"
"latitude":"48.858353"
"longitude":"2.294464"
"timezone":"Europe/Paris"
"location_string":"Paris, France"
"is_closed":false
"is_long_closed":false
"photo":{...}8 items
"address":"5 Avenue Anatole France"
"shopping_type":"none"
"location_subtype":"none"
"has_restaurant_coverpage":false
"has_attraction_coverpage":false
"show_address":true
"preferred_map_engine":"default"
"ancestors":[3 items
0:{...}4 items
1:{...}4 items
2:{...}4 items
]
"parent_display_name":"Paris"
"guide_count":"0"
}
"scope":"local"
}
1:{...}3 items
2:{...}3 items
3:{...}3 items
4:{...}3 items
5:{...}3 items
]
"partial_content":false
}

### Säätiedot

http://api.openweathermap.org/data/2.5/find?lat=${latLng.lat}&lon=${latLng.lng}&cnt=1&appId=${key}
Palvelin:
{"message":"accurate","cod":"200","count":1,"list":[{"id":5509558,"name":"Oak Springs (historical)","coord":{"lat":37.2194,"lon":-116.0578},"main":{"temp":276.65,"feels_like":274.73,"temp_min":276.65,"temp_max":276.65,"pressure":1026,"humidity":25,"sea_level":1026,"grnd_level":855},"dt":1647090617,"wind":{"speed":2.04,"deg":13},"sys":{"country":"US"},"rain":null,"snow":null,"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}]}]}


### Sovelluksen rajapinnan kutsut ja niissä käytettävät json-muodot.


http://localhost:3000/api/login
selain:
{
sahkoposti: newEmail,
salasana: newPassword
}
palvein:
{
token: tokenValue,
user: req.body.sahkoposti
}
http://localhost:3000/api/register
selain:
{
sahkoposti: newEmail,
salasana: newPassword,
salasana2: newPasswordConfirm
}

http://localhost:3000/api/check
Palvelin:
{
value: req.userData,
user: rows
}

http://localhost:3000/api/search?name
Palvelin:
{
success: true,
message: 'Haku onnistui!',
userdata: rows
}

http://localhost:3000/api/invites
Selain:
{
vastaanottaja: value
}
Palvelin:
{
id: jsonObj.vastaanottaja
}

http://localhost:3000/api/deleteInvite
Selain:
{
vastaanottaja: value
}

http://localhost:3000/api/deleteInvite2
Selain:
{
vastaanottaja: value
}

http://localhost:3000/api/acceptInvite
Selain:
{
vastaanottaja: value
}
Palvelin:
{
success: true,
message: 'päivitys onnistui!',
id: req.body.tunnus
}

http://localhost:3000/api/mapUsers
{
message: 'Listan näyttäminen onnistui!',
userdata: rows,
image: rows[0].kuva
}
http://localhost:3000/api/settings/email
Selain:
{
sahkoposti: newEmail
}
Palvelin:
{success: false,errors: errors.array()}

http://localhost:3000/api/settings/password
Selain:
{
salasana: newPassword
}

http://localhost:3000/api/postMessage
Selain:
{
viesti: viesti,
vastaanottaja_id: vastaanottaja
}
Palvelin:
{
success: true,
message: 'Viestin lisäys onnistui!',
value: {"vastaanottaja_id":req.body.vastaanottaja_id,"lahettaja_id":req.userData.id,"sisalto":req.body.viesti,"paivamaara":paivamaara,"sahkoposti":req.userData.user},
id: req.userData.id
}

http://localhost:3000/api/users
Palvelin:
{
success: true,
message: 'Listan näyttäminen onnistui!',
value: rows,
count: rows2,
id: req.userData.id
}

http://localhost:3000/api/userDetail?id=${value}&page=${this.sivut}&filter=${lajittele}
Palvelin:
{
success: true,
message: 'viestin tiedot onnistui!',
userdata: rows,
id: req.userData.id,
id2: req.query.id
}

http://localhost:3000/api/searchFriends?search=${value}
palvelin:
{
success: true,
message: 'Listan näyttäminen onnistui!',
userdata: rows
}

http://localhost:3000/api/deleteUser
Selain:
{
tunnus: id,
viesti: sisalto
}
Palvelin:
{
success: true,
message: 'Poisto onnistui!',
value: deleteObject.tunnus
}

http://localhost:3000/api/deleteUserMessage
Selain:
{
tunnus: id,
viesti: sisalto
}
Palvelin:
{
success: true,
message: 'Poisto onnistui!',
tunnus: deleteObject.tunnus,
sisalto: deleteObject.viesti,
oma: req.userData.id
}

http://localhost:3000/api/checkUserFirebase
Selain:
{
sahkoposti: user.email,
salasana: user.uid
}
Palvelin:
{
token: tokenValue,
user: jsonObj.sahkoposti,
value: req.user
}

http://localhost:3000/api/checkForgotPassword
Selain:
{
sahkoposti: newEmail,
salasana: newPassword
}
Palvelin:
{
token: tokenValue,
user: jsonObj.sahkoposti
}

http://localhost:3000/api/regenerateToken
Selain:
{
token: token
}
Palvelin:
{
token: tokenValue,
user: decoded.user
}









