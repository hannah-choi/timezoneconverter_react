const zones = [
    {
        zone: "Europe/Andorra",
        country: "Andorra",
        city: "Andorra",
    },
    {
        zone: "Asia/Dubai",
        country: "United Arab Emirates",
        city: "Dubai",
    },
    {
        zone: "Asia/Kabul",
        country: "Afghanistan",
        city: "Kabul",
    },
    {
        zone: "America/Port_of_Spain",
        country: "Antigua and Barbuda",
        city: "Saint John's",
    },
    {
        zone: "America/Port_of_Spain",
        country: "Anguilla",
        city: "The Valley",
    },
    {
        zone: "Europe/Tirane",
        country: "Albania",
        city: "Tirane",
    },
    {
        zone: "Asia/Yerevan",
        country: "Armenia",
        city: "Yerevan",
    },
    {
        zone: "Africa/Luanda",
        country: "Angola",
        city: "Luanda",
    },
    {
        zone: "America/Argentina/Buenos_Aires",
        country: "Argentina",
        city: "Buenos Aires",
    },
    {
        zone: "America/Argentina/Cordoba",
        country: "Argentina",
        city: "Cordoba",
    },
    {
        zone: "America/Argentina/Salta",
        country: "Argentina",
        city: "Salta",
    },
    {
        zone: "America/Argentina/Jujuy",
        country: "Argentina",
        city: "Jujuy",
    },
    {
        zone: "America/Argentina/Tucuman",
        country: "Argentina",
        city: "Tucuman",
    },
    {
        zone: "America/Argentina/Catamarca",
        country: "Argentina",
        city: "Catamarca",
    },
    {
        zone: "America/Argentina/La_Rioja",
        country: "Argentina",
        city: "La Rioja",
    },
    {
        zone: "America/Argentina/San_Juan",
        country: "Argentina",
        city: "San Juan",
    },
    {
        zone: "America/Argentina/Mendoza",
        country: "Argentina",
        city: "Mendoza",
    },
    {
        zone: "America/Argentina/San_Luis",
        country: "Argentina",
        city: "San Luis",
    },
    {
        zone: "America/Argentina/Rio_Gallegos",
        country: "Argentina",
        city: "Rio Gallegos",
    },
    {
        zone: "America/Argentina/Ushuaia",
        country: "Argentina",
        city: "Ushuaia",
    },
    {
        zone: "Pacific/Pago_Pago",
        country: "American Samoa",
        city: "Pago Pago",
    },
    {
        zone: "Europe/Vienna",
        country: "Austria",
        city: "Vienna",
    },
    {
        zone: "Australia/Lord_Howe",
        country: "Australia",
        city: "Lord Howe",
    },
    {
        zone: "Australia/Hobart",
        country: "Australia",
        city: "Hobart",
    },
    {
        zone: "Australia/Currie",
        country: "Australia",
        city: "Currie",
    },
    {
        zone: "Australia/Melbourne",
        country: "Australia",
        city: "Melbourne",
    },
    {
        zone: "Australia/Sydney",
        country: "Australia",
        city: "Sydney",
    },
    {
        zone: "Australia/Broken_Hill",
        country: "Australia",
        city: "Broken Hill",
    },
    {
        zone: "Australia/Brisbane",
        country: "Australia",
        city: "Brisbane",
    },
    {
        zone: "Australia/Lindeman",
        country: "Australia",
        city: "Lindeman",
    },
    {
        zone: "Australia/Adelaide",
        country: "Australia",
        city: "Adelaide",
    },
    {
        zone: "Australia/Darwin",
        country: "Australia",
        city: "Darwin",
    },
    {
        zone: "Australia/Perth",
        country: "Australia",
        city: "Perth",
    },
    {
        zone: "Australia/Eucla",
        country: "Australia",
        city: "Eucla",
    },
    {
        zone: "America/Aruba",
        country: "Aruba",
        city: "Aruba",
    },
    {
        zone: "Europe/Mariehamn",
        country: "Åland Islands",
        city: "Mariehamn",
    },
    {
        zone: "Asia/Baku",
        country: "Azerbaijan",
        city: "Baku",
    },
    {
        zone: "Europe/Sarajevo",
        country: "Bosnia and Herzegovina",
        city: "Sarajevo",
    },
    {
        zone: "America/Barbados",
        country: "Barbados",
        city: "Barbados",
    },
    {
        zone: "Asia/Dhaka",
        country: "Bangladesh",
        city: "Dhaka",
    },
    {
        zone: "Europe/Brussels",
        country: "Brussels",
        city: "Brussels",
    },
    {
        zone: "Africa/Ouagadougou",
        country: "Burkina Faso",
        city: "Ouagadougou",
    },
    {
        zone: "Europe/Sofia",
        country: "Bulgaria",
        city: "Sofia",
    },
    {
        zone: "Asia/Bahrain",
        country: "Bahrain",
        city: "Bahrain",
    },
    {
        zone: "Africa/Bujumbura",
        country: "Burundi",
        city: "Bujumbura",
    },
    {
        zone: "Africa/Porto-Novo",
        country: "Benin",
        city: "Porto-Novo",
    },
    {
        zone: "America/St_Barthelemy",
        country: "Saint Barthélemy",
        city: "St Barthelemy",
    },
    {
        zone: "Atlantic/Bermuda",
        country: "Bermuda",
        city: "Bermuda",
    },
    {
        zone: "Asia/Brunei",
        country: "Brunei",
        city: "Brunei",
    },
    {
        zone: "America/La_Paz",
        country: "Bolivia",
        city: "La Paz",
    },
    {
        zone: "America/Kralendijk",
        country: "Bonaire, Saint Eustatius and Saba",
        city: "Kralendijk",
    },
    {
        zone: "America/Noronha",
        country: "Brazil",
        city: "Noronha",
    },
    {
        zone: "America/Belem",
        country: "Brazil",
        city: "Belem",
    },
    {
        zone: "America/Fortaleza",
        country: "Brazil",
        city: "Fortaleza",
    },
    {
        zone: "America/Recife",
        country: "Brazil",
        city: "Recife",
    },
    {
        zone: "America/Araguaina",
        country: "Brazil",
        city: "Araguaina",
    },
    {
        zone: "America/Maceio",
        country: "Brazil",
        city: "Maceio",
    },
    {
        zone: "America/Bahia",
        country: "Brazil",
        city: "Bahia",
    },
    {
        zone: "America/Sao_Paulo",
        country: "Brazil",
        city: "Sao Paulo",
    },
    {
        zone: "America/Campo_Grande",
        country: "Brazil",
        city: "Campo Grande",
    },
    {
        zone: "America/Cuiaba",
        country: "Brazil",
        city: "Cuiaba",
    },
    {
        zone: "America/Santarem",
        country: "Brazil",
        city: "Santarem",
    },
    {
        zone: "America/Porto_Velho",
        country: "Brazil",
        city: "Porto Velho",
    },
    {
        zone: "America/Boa_Vista",
        country: "Brazil",
        city: "Boa Vista",
    },
    {
        zone: "America/Manaus",
        country: "Brazil",
        city: "Manaus",
    },
    {
        zone: "America/Eirunepe",
        country: "Brazil",
        city: "Eirunepe",
    },
    {
        zone: "America/Rio_Branco",
        country: "Brazil",
        city: "Rio Branco",
    },
    {
        zone: "America/Nassau",
        country: "The Bahamas",
        city: "Nassau",
    },
    {
        zone: "Asia/Thimphu",
        country: "Bhutan",
        city: "Thimphu",
    },
    {
        zone: "Africa/Gaborone",
        country: "Botswana",
        city: "Gaborone",
    },
    {
        zone: "Europe/Minsk",
        country: "Belarus",
        city: "Minsk",
    },
    {
        zone: "America/Belize",
        country: "Belize",
        city: "Belize",
    },
    {
        zone: "America/St_Johns",
        country: "Canada",
        city: "St Johns",
    },
    {
        zone: "America/Halifax",
        country: "Canada",
        city: "Halifax",
    },
    {
        zone: "America/Glace_Bay",
        country: "Canada",
        city: "Glace Bay",
    },
    {
        zone: "America/Moncton",
        country: "Canada",
        city: "Moncton",
    },
    {
        zone: "America/Goose_Bay",
        country: "Canada",
        city: "Goose Bay",
    },
    {
        zone: "America/Blanc-Sablon",
        country: "Canada",
        city: "Blanc-Sablon",
    },
    {
        zone: "America/Toronto",
        country: "Canada",
        city: "Toronto",
    },
    {
        zone: "America/Nipigon",
        country: "Canada",
        city: "Nipigon",
    },
    {
        zone: "America/Thunder_Bay",
        country: "Canada",
        city: "Thunder Bay",
    },
    {
        zone: "America/Iqaluit",
        country: "Canada",
        city: "Iqaluit",
    },
    {
        zone: "America/Pangnirtung",
        country: "Canada",
        city: "Pangnirtung",
    },
    {
        zone: "America/Atikokan",
        country: "Canada",
        city: "Atikokan",
    },
    {
        zone: "America/Winnipeg",
        country: "Canada",
        city: "Winnipeg",
    },
    {
        zone: "America/Rainy_River",
        country: "Canada",
        city: "Rainy River",
    },
    {
        zone: "America/Resolute",
        country: "Canada",
        city: "Resolute",
    },
    {
        zone: "America/Rankin_Inlet",
        country: "Canada",
        city: "Rankin Inlet",
    },
    {
        zone: "America/Regina",
        country: "Canada",
        city: "Regina",
    },
    {
        zone: "America/Swift_Current",
        country: "Canada",
        city: "Swift Current",
    },
    {
        zone: "America/Edmonton",
        country: "Canada",
        city: "Edmonton",
    },
    {
        zone: "America/Cambridge_Bay",
        country: "Canada",
        city: "Cambridge Bay",
    },
    {
        zone: "America/Yellowknife",
        country: "Canada",
        city: "Yellowknife",
    },
    {
        zone: "America/Inuvik",
        country: "Canada",
        city: "Inuvik",
    },
    {
        zone: "America/Creston",
        country: "Canada",
        city: "Creston",
    },
    {
        zone: "America/Dawson_Creek",
        country: "Canada",
        city: "Dawson Creek",
    },
    {
        zone: "America/Fort_Nelson",
        country: "Canada",
        city: "Fort Nelson",
    },
    {
        zone: "America/Vancouver",
        country: "Canada",
        city: "Vancouver",
    },
    {
        zone: "America/Whitehorse",
        country: "Canada",
        city: "Whitehorse",
    },
    {
        zone: "America/Dawson",
        country: "Canada",
        city: "Dawson",
    },
    {
        zone: "Indian/Cocos",
        country: "Cocos (Keeling) Islands",
        city: "Cocos",
    },
    {
        zone: "Africa/Kinshasa",
        country: "Democratic Republic of the Congo",
        city: "Kinshasa",
    },
    {
        zone: "Africa/Lubumbashi",
        country: "Democratic Republic of the Congo",
        city: "Lubumbashi",
    },
    {
        zone: "Africa/Bangui",
        country: "Central African Republic",
        city: "Bangui",
    },
    {
        zone: "Africa/Brazzaville",
        country: "Republic of the Congo",
        city: "Brazzaville",
    },
    {
        zone: "Europe/Zurich",
        country: "Switzerland",
        city: "Zurich",
    },
    {
        zone: "Africa/Abidjan",
        country: "Côte d'Ivoire",
        city: "Abidjan",
    },
    {
        zone: "Pacific/Rarotonga",
        country: "Cook Islands",
        city: "Rarotonga",
    },
    {
        zone: "America/Santiago",
        country: "Chile",
        city: "Santiago",
    },
    {
        zone: "America/Punta_Arenas",
        country: "Chile",
        city: "Punta Arenas",
    },
    {
        zone: "Pacific/Easter",
        country: "Chile",
        city: "Easter",
    },
    {
        zone: "Africa/Douala",
        country: "Cameroon",
        city: "Douala",
    },
    {
        zone: "Asia/Shanghai",
        country: "China",
        city: "Shanghai",
    },
    {
        zone: "Asia/Urumqi",
        country: "China",
        city: "Urumqi",
    },
    {
        zone: "America/Bogota",
        country: "Colombia",
        city: "Bogota",
    },
    {
        zone: "America/Costa_Rica",
        country: "Costa Rica",
        city: "Costa Rica",
    },
    {
        zone: "America/Havana",
        country: "Cuba",
        city: "Havana",
    },
    {
        zone: "Atlantic/Cape_Verde",
        country: "Cape Verde",
        city: "Cape Verde",
    },
    {
        zone: "America/Curacao",
        country: "Curaçao",
        city: "Willemstad",
    },
    {
        zone: "Indian/Christmas",
        country: "Christmas Island",
        city: "Christmas",
    },
    {
        zone: "Asia/Nicosia",
        country: "Cyprus",
        city: "Nicosia",
    },
    {
        zone: "Asia/Famagusta",
        country: "Cyprus",
        city: "Famagusta",
    },
    {
        zone: "Europe/Prague",
        country: "Czechia",
        city: "Prague",
    },
    {
        zone: "Europe/Berlin",
        country: "Germany",
        city: "Berlin",
    },
    {
        zone: "Europe/Busingen",
        country: "Germany",
        city: "Busingen",
    },
    {
        zone: "Africa/Djibouti",
        country: "Djibouti",
        city: "Djibouti",
    },
    {
        zone: "Europe/Copenhagen",
        country: "Denmark",
        city: "Copenhagen",
    },
    {
        zone: "America/Dominica",
        country: "Dominica",
        city: "Dominica",
    },
    {
        zone: "America/Santo_Domingo",
        country: "Dominican Republic",
        city: "Santo Domingo",
    },
    {
        zone: "Africa/Algiers",
        country: "Algeria",
        city: "Algiers",
    },
    {
        zone: "America/Guayaquil",
        country: "Ecuador",
        city: "Guayaquil",
    },
    {
        zone: "Pacific/Galapagos",
        country: "Ecuador",
        city: "Galapagos",
    },
    {
        zone: "Europe/Tallinn",
        country: "Estonia",
        city: "Tallinn",
    },
    {
        zone: "Africa/Cairo",
        country: "Egypt",
        city: "Cairo",
    },
    {
        zone: "Africa/El_Aaiun",
        country: "Western Sahara",
        city: "El Aaiun",
    },
    {
        zone: "Africa/Asmara",
        country: "Eritrea",
        city: "Asmara",
    },
    {
        zone: "Europe/Madrid",
        country: "Spain",
        city: "Madrid",
    },
    {
        zone: "Africa/Ceuta",
        country: "Spain",
        city: "Ceuta",
    },
    {
        zone: "Atlantic/Canary",
        country: "Spain",
        city: "Canary",
    },
    {
        zone: "Africa/Addis_Ababa",
        country: "Ethiopia",
        city: "Addis Ababa",
    },
    {
        zone: "Europe/Helsinki",
        country: "Finland",
        city: "Helsinki",
    },
    {
        zone: "Pacific/Fiji",
        country: "Fiji",
        city: "Fiji",
    },
    {
        zone: "Atlantic/Stanley",
        country: "Falkland Islands",
        city: "Stanley",
    },
    {
        zone: "Pacific/Chuuk",
        country: "Federated States of Micronesia",
        city: "Chuuk",
    },
    {
        zone: "Pacific/Pohnpei",
        country: "Federated States of Micronesia",
        city: "Pohnpei",
    },
    {
        zone: "Pacific/Kosrae",
        country: "Federated States of Micronesia",
        city: "Kosrae",
    },
    {
        zone: "Atlantic/Faroe",
        country: "Faroe Islands",
        city: "Faroe",
    },
    {
        zone: "Europe/Paris",
        country: "France",
        city: "Paris",
    },
    {
        zone: "Africa/Libreville",
        country: "Gabon",
        city: "Libreville",
    },
    {
        zone: "Europe/London",
        country: "United Kingdom",
        city: "London",
    },
    {
        zone: "America/Grenada",
        country: "Grenada",
        city: "Grenada",
    },
    {
        zone: "Asia/Tbilisi",
        country: "Georgia",
        city: "Tbilisi",
    },
    {
        zone: "America/Cayenne",
        country: "French Guiana",
        city: "Cayenne",
    },
    {
        zone: "Africa/Accra",
        country: "Ghana",
        city: "Accra",
    },
    {
        zone: "Europe/Gibraltar",
        country: "Gibraltar",
        city: "Gibraltar",
    },
    {
        zone: "America/Godthab",
        country: "Greenland",
        city: "Godthab",
    },
    {
        zone: "America/Danmarkshavn",
        country: "Greenland",
        city: "Danmarkshavn",
    },
    {
        zone: "America/Scoresbysund",
        country: "Greenland",
        city: "Scoresbysund",
    },
    {
        zone: "America/Thule",
        country: "Greenland",
        city: "Thule",
    },
    {
        zone: "Africa/Banjul",
        country: "The Gambia",
        city: "Banjul",
    },
    {
        zone: "Africa/Conakry",
        country: "Guinea",
        city: "Conakry",
    },
    {
        zone: "America/Guadeloupe",
        country: "Guadeloupe",
        city: "Guadeloupe",
    },
    {
        zone: "Africa/Malabo",
        country: "Equatorial Guinea",
        city: "Malabo",
    },
    {
        zone: "Europe/Athens",
        country: "Greece",
        city: "Athens",
    },
    {
        zone: "Atlantic/South_Georgia",
        country: "South Georgia and the South Sandwich Islands",
        city: "South Georgia",
    },
    {
        zone: "America/Guatemala",
        country: "Guatemala",
        city: "Guatemala",
    },
    {
        zone: "Pacific/Guam",
        country: "Guam",
        city: "Guam",
    },
    {
        zone: "Africa/Bissau",
        country: "Guinea-Bissau",
        city: "Bissau",
    },
    {
        zone: "America/Guyana",
        country: "Guyana",
        city: "Guyana",
    },
    {
        zone: "Asia/Hong_Kong",
        country: "Hong Kong",
        city: "Hong Kong",
    },
    {
        zone: "America/Tegucigalpa",
        country: "Honduras",
        city: "Tegucigalpa",
    },
    {
        zone: "Europe/Zagreb",
        country: "Croatia",
        city: "Zagreb",
    },
    {
        zone: "America/Port-au-Prince",
        country: "Haiti",
        city: "Port-au-Prince",
    },
    {
        zone: "Europe/Budapest",
        country: "Hungary",
        city: "Budapest",
    },
    {
        zone: "Asia/Jakarta",
        country: "Indonesia",
        city: "Jakarta",
    },
    {
        zone: "Asia/Pontianak",
        country: "Indonesia",
        city: "Pontianak",
    },
    {
        zone: "Asia/Makassar",
        country: "Indonesia",
        city: "Makassar",
    },
    {
        zone: "Asia/Jayapura",
        country: "Indonesia",
        city: "Jayapura",
    },
    {
        zone: "Europe/Dublin",
        country: "Ireland",
        city: "Dublin",
    },
    {
        zone: "Asia/Jerusalem",
        country: "Israel",
        city: "Jerusalem",
    },
    {
        zone: "Asia/Kolkata",
        country: "India",
        city: "Kolkata",
    },
    {
        zone: "Indian/Chagos",
        country: "British Indian Ocean Territory",
        city: "Chagos",
    },
    {
        zone: "Asia/Baghdad",
        country: "Iraq",
        city: "Baghdad",
    },
    {
        zone: "Asia/Tehran",
        country: "Iran",
        city: "Tehran",
    },
    {
        zone: "Atlantic/Reykjavik",
        country: "Iceland",
        city: "Reykjavik",
    },
    {
        zone: "Europe/Rome",
        country: "Italy",
        city: "Rome",
    },
    {
        zone: "America/Jamaica",
        country: "Jamaica",
        city: "Jamaica",
    },
    {
        zone: "Asia/Amman",
        country: "Jordan",
        city: "Amman",
    },
    {
        zone: "Asia/Tokyo",
        country: "Japan",
        city: "Tokyo",
    },
    {
        zone: "Africa/Nairobi",
        country: "Kenya",
        city: "Nairobi",
    },
    {
        zone: "Asia/Bishkek",
        country: "Kyrgyzstan",
        city: "Bishkek",
    },
    {
        zone: "Asia/Phnom_Penh",
        country: "Cambodia",
        city: "Phnom Penh",
    },
    {
        zone: "Pacific/Tarawa",
        country: "Kiribati",
        city: "Tarawa",
    },
    {
        zone: "Pacific/Enderbury",
        country: "Kiribati",
        city: "Enderbury",
    },
    {
        zone: "Pacific/Kiritimati",
        country: "Kiribati",
        city: "Kiritimati",
    },
    {
        zone: "Indian/Comoro",
        country: "Comoros",
        city: "Comoro",
    },
    {
        zone: "America/St_Kitts",
        country: "Saint Kitts and Nevis",
        city: "St Kitts",
    },
    {
        zone: "Asia/Pyongyang",
        country: "North Korea",
        city: "Pyongyang",
    },
    {
        zone: "Asia/Seoul",
        country: "South Korea",
        city: "Seoul",
    },
    {
        zone: "Asia/Kuwait",
        country: "Kuwait",
        city: "Kuwait City",
    },
    {
        zone: "America/Cayman",
        country: "Cayman Islands",
        city: "Cayman",
    },
    {
        zone: "Asia/Almaty",
        country: "Kazakhstan",
        city: "Almaty",
    },
    {
        zone: "Asia/Qyzylorda",
        country: "Kazakhstan",
        city: "Qyzylorda",
    },
    {
        zone: "Asia/Qostanay",
        country: "Kazakhstan",
        city: "Qostanay",
    },
    {
        zone: "Asia/Aqtobe",
        country: "Kazakhstan",
        city: "Aqtobe",
    },
    {
        zone: "Asia/Aqtau",
        country: "Kazakhstan",
        city: "Aqtau",
    },
    {
        zone: "Asia/Atyrau",
        country: "Kazakhstan",
        city: "Atyrau",
    },
    {
        zone: "Asia/Oral",
        country: "Kazakhstan",
        city: "Oral",
    },
    {
        zone: "Asia/Vientiane",
        country: "Laos",
        city: "Vientiane",
    },
    {
        zone: "Asia/Beirut",
        country: "Lebanon",
        city: "Beirut",
    },
    {
        zone: "America/St_Lucia",
        country: "Saint Lucia",
        city: "St Lucia",
    },
    {
        zone: "Europe/Vaduz",
        country: "Liechtenstein",
        city: "Vaduz",
    },
    {
        zone: "Asia/Colombo",
        country: "Sri Lanka",
        city: "Colombo",
    },
    {
        zone: "Africa/Monrovia",
        country: "Liberia",
        city: "Monrovia",
    },
    {
        zone: "Africa/Maseru",
        country: "Lesotho",
        city: "Maseru",
    },
    {
        zone: "Europe/Vilnius",
        country: "Lithuania",
        city: "Vilnius",
    },
    {
        zone: "Europe/Luxembourg",
        country: "Luxembourg",
        city: "Luxembourg",
    },
    {
        zone: "Europe/Riga",
        country: "Latvia",
        city: "Riga",
    },
    {
        zone: "Africa/Tripoli",
        country: "Libya",
        city: "Tripoli",
    },
    {
        zone: "Africa/Casablanca",
        country: "Morocco",
        city: "Casablanca",
    },
    {
        zone: "Europe/Monaco",
        country: "Monaco",
        city: "Monaco",
    },
    {
        zone: "Europe/Chisinau",
        country: "Moldova",
        city: "Chisinau",
    },
    {
        zone: "Europe/Podgorica",
        country: "Montenegro",
        city: "Podgorica",
    },
    {
        zone: "America/Marigot",
        country: "Saint Martin",
        city: "Marigot",
    },
    {
        zone: "Indian/Antananarivo",
        country: "Madagascar",
        city: "Antananarivo",
    },
    {
        zone: "Pacific/Majuro",
        country: "Marshall Islands",
        city: "Majuro",
    },
    {
        zone: "Pacific/Kwajalein",
        country: "Marshall Islands",
        city: "Kwajalein",
    },
    {
        zone: "Europe/Skopje",
        country: "North Macedonia",
        city: "Skopje",
    },
    {
        zone: "Africa/Bamako",
        country: "Mali",
        city: "Bamako",
    },
    {
        zone: "Asia/Yangon",
        country: "Miyanmar",
        city: "Yangon",
    },
    {
        zone: "Asia/Ulaanbaatar",
        country: "Mongolia",
        city: "Ulaanbaatar",
    },
    {
        zone: "Asia/Hovd",
        country: "Mongolia",
        city: "Hovd",
    },
    {
        zone: "Asia/Choibalsan",
        country: "Mongolia",
        city: "Choibalsan",
    },
    {
        zone: "Asia/Macau",
        country: "Macau",
        city: "Macau",
    },
    {
        zone: "Pacific/Saipan",
        country: "Northern Mariana Islands",
        city: "Saipan",
    },
    {
        zone: "America/Martinique",
        country: "Martinique",
        city: "Martinique",
    },
    {
        zone: "Africa/Nouakchott",
        country: "Mauritania",
        city: "Nouakchott",
    },
    {
        zone: "America/Montserrat",
        country: "Montserrat",
        city: "Montserrat",
    },
    {
        zone: "Europe/Malta",
        country: "Malta",
        city: "Malta",
    },
    {
        zone: "Indian/Mauritius",
        country: "Mauritius",
        city: "Mauritius",
    },
    {
        zone: "Indian/Maldives",
        country: "Maldives",
        city: "Maldives",
    },
    {
        zone: "Africa/Blantyre",
        country: "Malawi",
        city: "Blantyre",
    },
    {
        zone: "America/Mexico_City",
        country: "Mexico",
        city: "Mexico City",
    },
    {
        zone: "America/Cancun",
        country: "Mexico",
        city: "Cancun",
    },
    {
        zone: "America/Merida",
        country: "Mexico",
        city: "Merida",
    },
    {
        zone: "America/Monterrey",
        country: "Mexico",
        city: "Monterrey",
    },
    {
        zone: "America/Matamoros",
        country: "Mexico",
        city: "Matamoros",
    },
    {
        zone: "America/Mazatlan",
        country: "Mexico",
        city: "Mazatlan",
    },
    {
        zone: "America/Chihuahua",
        country: "Mexico",
        city: "Chihuahua",
    },
    {
        zone: "America/Ojinaga",
        country: "Mexico",
        city: "Ojinaga",
    },
    {
        zone: "America/Hermosillo",
        country: "Mexico",
        city: "Hermosillo",
    },
    {
        zone: "America/Tijuana",
        country: "Mexico",
        city: "Tijuana",
    },
    {
        zone: "America/Bahia_Banderas",
        country: "Mexico",
        city: "Bahia Banderas",
    },
    {
        zone: "Asia/Kuala_Lumpur",
        country: "Malaysia",
        city: "Kuala Lumpur",
    },
    {
        zone: "Asia/Kuching",
        country: "Malaysia",
        city: "Kuching",
    },
    {
        zone: "Africa/Maputo",
        country: "Mozambique",
        city: "Maputo",
    },
    {
        zone: "Africa/Windhoek",
        country: "Namibia",
        city: "Windhoek",
    },
    {
        zone: "Pacific/Noumea",
        country: "New Caledonia",
        city: "Noumea",
    },
    {
        zone: "Africa/Niamey",
        country: "Niger",
        city: "Niamey",
    },
    {
        zone: "Pacific/Norfolk",
        country: "Norfolk Island",
        city: "Norfolk",
    },
    {
        zone: "Africa/Lagos",
        country: "Nigeria",
        city: "Lagos",
    },
    {
        zone: "America/Managua",
        country: "Nicaragua",
        city: "Managua",
    },
    {
        zone: "Europe/Amsterdam",
        country: "Netherlands",
        city: "Amsterdam",
    },
    {
        zone: "Europe/Oslo",
        country: "Norway",
        city: "Oslo",
    },
    {
        zone: "Asia/Kathmandu",
        country: "Nepal",
        city: "Kathmandu",
    },
    {
        zone: "Pacific/Nauru",
        country: "Nauru",
        city: "Nauru",
    },
    {
        zone: "Pacific/Niue",
        country: "Niue",
        city: "Niue",
    },
    {
        zone: "Pacific/Auckland",
        country: "New Zealand",
        city: "Auckland",
    },
    {
        zone: "Pacific/Chatham",
        country: "New Zealand",
        city: "Chatham",
    },
    {
        zone: "Asia/Muscat",
        country: "Oman",
        city: "Muscat",
    },
    {
        zone: "America/Panama",
        country: "Panama",
        city: "Panama",
    },
    {
        zone: "America/Lima",
        country: "Peru",
        city: "Lima",
    },
    {
        zone: "Pacific/Tahiti",
        country: "French Polynesia",
        city: "Tahiti",
    },
    {
        zone: "Pacific/Marquesas",
        country: "French Polynesia",
        city: "Marquesas",
    },
    {
        zone: "Pacific/Gambier",
        country: "French Polynesia",
        city: "Gambier",
    },
    {
        zone: "Pacific/Port_Moresby",
        country: "Papua New Guinea",
        city: "Port Moresby",
    },
    {
        zone: "Pacific/Bougainville",
        country: "Papua New Guinea",
        city: "Bougainville",
    },
    {
        zone: "Asia/Manila",
        country: "Philippines",
        city: "Manila",
    },
    {
        zone: "Asia/Karachi",
        country: "Pakistan",
        city: "Karachi",
    },
    {
        zone: "Europe/Warsaw",
        country: "Poland",
        city: "Warsaw",
    },
    {
        zone: "America/Miquelon",
        country: "Saint Pierre and Miquelon",
        city: "Miquelon",
    },
    {
        zone: "Pacific/Pitcairn",
        country: "Pitcairn Islands",
        city: "Pitcairn",
    },
    {
        zone: "America/Puerto_Rico",
        country: "Puerto Rico",
        city: "Puerto Rico",
    },
    {
        zone: "Asia/Gaza",
        country: "Palestine",
        city: "Gaza",
    },
    {
        zone: "Asia/Hebron",
        country: "Palestine",
        city: "Hebron",
    },
    {
        zone: "Europe/Lisbon",
        country: "Portugal",
        city: "Lisbon",
    },
    {
        zone: "Atlantic/Madeira",
        country: "Portugal",
        city: "Madeira",
    },
    {
        zone: "Atlantic/Azores",
        country: "Portugal",
        city: "Azores",
    },
    {
        zone: "Pacific/Palau",
        country: "Palau",
        city: "Palau",
    },
    {
        zone: "America/Asuncion",
        country: "Paraguay",
        city: "Asuncion",
    },
    {
        zone: "Asia/Qatar",
        country: "Qatar",
        city: "Doha",
    },
    {
        zone: "Europe/Bucharest",
        country: "Romania",
        city: "Bucharest",
    },
    {
        zone: "Europe/Belgrade",
        country: "Serbia",
        city: "Belgrade",
    },
    {
        zone: "Europe/Kaliningrad",
        country: "Rusia",
        city: "Kaliningrad",
    },
    {
        zone: "Europe/Moscow",
        country: "Rusia",
        city: "Moscow",
    },
    {
        zone: "Europe/Kirov",
        country: "Rusia",
        city: "Kirov",
    },
    {
        zone: "Europe/Astrakhan",
        country: "Rusia",
        city: "Astrakhan",
    },
    {
        zone: "Europe/Volgograd",
        country: "Rusia",
        city: "Volgograd",
    },
    {
        zone: "Europe/Saratov",
        country: "Rusia",
        city: "Saratov",
    },
    {
        zone: "Europe/Ulyanovsk",
        country: "Rusia",
        city: "Ulyanovsk",
    },
    {
        zone: "Europe/Samara",
        country: "Rusia",
        city: "Samara",
    },
    {
        zone: "Asia/Yekaterinburg",
        country: "Rusia",
        city: "Yekaterinburg",
    },
    {
        zone: "Asia/Omsk",
        country: "Rusia",
        city: "Omsk",
    },
    {
        zone: "Asia/Novosibirsk",
        country: "Rusia",
        city: "Novosibirsk",
    },
    {
        zone: "Asia/Barnaul",
        country: "Rusia",
        city: "Barnaul",
    },
    {
        zone: "Asia/Tomsk",
        country: "Rusia",
        city: "Tomsk",
    },
    {
        zone: "Asia/Novokuznetsk",
        country: "Rusia",
        city: "Novokuznetsk",
    },
    {
        zone: "Asia/Krasnoyarsk",
        country: "Rusia",
        city: "Krasnoyarsk",
    },
    {
        zone: "Asia/Irkutsk",
        country: "Rusia",
        city: "Irkutsk",
    },
    {
        zone: "Asia/Chita",
        country: "Rusia",
        city: "Chita",
    },
    {
        zone: "Asia/Yakutsk",
        country: "Rusia",
        city: "Yakutsk",
    },
    {
        zone: "Asia/Khandyga",
        country: "Rusia",
        city: "Khandyga",
    },
    {
        zone: "Asia/Vladivostok",
        country: "Rusia",
        city: "Vladivostok",
    },
    {
        zone: "Asia/Ust-Nera",
        country: "Rusia",
        city: "Ust-Nera",
    },
    {
        zone: "Asia/Magadan",
        country: "Rusia",
        city: "Magadan",
    },
    {
        zone: "Asia/Sakhalin",
        country: "Rusia",
        city: "Sakhalin",
    },
    {
        zone: "Asia/Srednekolymsk",
        country: "Rusia",
        city: "Srednekolymsk",
    },
    {
        zone: "Asia/Kamchatka",
        country: "Rusia",
        city: "Kamchatka",
    },
    {
        zone: "Asia/Anadyr",
        country: "Rusia",
        city: "Anadyr",
    },
    {
        zone: "Africa/Kigali",
        country: "Rwanda",
        city: "Kigali",
    },
    {
        zone: "Asia/Riyadh",
        country: "Saudi Arabia",
        city: "Riyadh",
    },
    {
        zone: "Pacific/Guadalcanal",
        country: "Solomon Islands",
        city: "Guadalcanal",
    },
    {
        zone: "Indian/Mahe",
        country: "Seychelles",
        city: "Mahe",
    },
    {
        zone: "Africa/Khartoum",
        country: "Sudan",
        city: "Khartoum",
    },
    {
        zone: "Europe/Stockholm",
        country: "Sweden",
        city: "Stockholm",
    },
    {
        zone: "Asia/Singapore",
        country: "Singapore",
        city: "Singapore",
    },
    {
        zone: "Atlantic/St_Helena",
        country: "Saint Helena, Ascension and Tristan da Cunha",
        city: "St Helena",
    },
    {
        zone: "Europe/Ljubljana",
        country: "Slovenia",
        city: "Ljubljana",
    },
    {
        zone: "Arctic/Longyearbyen",
        country: "Svalbard and Jan Mayen",
        city: "Longyearbyen",
    },
    {
        zone: "Europe/Bratislava",
        country: "Slovakia",
        city: "Bratislava",
    },
    {
        zone: "Africa/Freetown",
        country: "Sierra Leone",
        city: "Freetown",
    },
    {
        zone: "Europe/San_Marino",
        country: "San Marino",
        city: "San Marino",
    },
    {
        zone: "Africa/Dakar",
        country: "Senegal",
        city: "Dakar",
    },
    {
        zone: "Africa/Mogadishu",
        country: "Somalia",
        city: "Mogadishu",
    },
    {
        zone: "America/Paramaribo",
        country: "Suriname",
        city: "Paramaribo",
    },
    {
        zone: "Africa/Juba",
        country: "South Sudan",
        city: "Juba",
    },
    {
        zone: "Africa/Sao_Tome",
        country: "São Tomé and Príncipe",
        city: "Sao Tome",
    },
    {
        zone: "America/El_Salvador",
        country: "El Salvador",
        city: "El Salvador",
    },
    {
        zone: "America/Lower_Princes",
        country: "Sint Maarten",
        city: "Lower Princes",
    },
    {
        zone: "Asia/Damascus",
        country: "Syria",
        city: "Damascus",
    },
    {
        zone: "Africa/Mbabane",
        country: "Eswatini",
        city: "Mbabane",
    },
    {
        zone: "America/Grand_Turk",
        country: "Turks and Caicos Islands",
        city: "Grand Turk",
    },
    {
        zone: "Africa/Ndjamena",
        country: "Chad",
        city: "Ndjamena",
    },
    {
        zone: "Indian/Reunion",
        country: "French Southern Territories",
        city: "Reunion",
    },
    {
        zone: "Indian/Kerguelen",
        country: "French Southern Territories",
        city: "Kerguelen",
    },
    {
        zone: "Africa/Lome",
        country: "Togo",
        city: "Lome",
    },
    {
        zone: "Asia/Bangkok",
        country: "Thailand",
        city: "Bangkok",
    },
    {
        zone: "Asia/Dushanbe",
        country: "Tajikistan",
        city: "Dushanbe",
    },
    {
        zone: "Pacific/Fakaofo",
        country: "Tokelau",
        city: "Fakaofo",
    },
    {
        zone: "Asia/Dili",
        country: "Timor-Leste",
        city: "Dili",
    },
    {
        zone: "Asia/Ashgabat",
        country: "Turkmenistan",
        city: "Ashgabat",
    },
    {
        zone: "Africa/Tunis",
        country: "Tunisia",
        city: "Tunis",
    },
    {
        zone: "Pacific/Tongatapu",
        country: "Tonga",
        city: "Tongatapu",
    },
    {
        zone: "Europe/Istanbul",
        country: "Turkey",
        city: "Istanbul",
    },
    {
        zone: "America/Port_of_Spain",
        country: "Trinidad and Tobago",
        city: "Port of Spain",
    },
    {
        zone: "Pacific/Funafuti",
        country: "Tuvalu",
        city: "Funafuti",
    },
    {
        zone: "Asia/Taipei",
        country: "Taiwan",
        city: "Taipei",
    },
    {
        zone: "Africa/Dar_es_Salaam",
        country: "Tanzania",
        city: "Dar es Salaam",
    },
    {
        zone: "Europe/Simferopol",
        country: "Republic of Crimea",
        city: "Simferopol",
    },
    {
        zone: "Europe/Kiev",
        country: "Ukraine",
        city: "Kiev",
    },
    {
        zone: "Europe/Uzhgorod",
        country: "Ukraine",
        city: "Uzhgorod",
    },
    {
        zone: "Europe/Zaporozhye",
        country: "Ukraine",
        city: "Zaporozhye",
    },
    {
        zone: "Africa/Kampala",
        country: "Uganda",
        city: "Kampala",
    },
    {
        zone: "Pacific/Wake",
        country: "U.S. Minor Outlying Islands",
        city: "Wake",
    },
    {
        zone: "Pacific/Midway",
        country: "U.S. Minor Outlying Islands",
        city: "Midway",
    },
    {
        zone: "America/New_York",
        country: "United States",
        city: "New York",
    },
    {
        zone: "America/Detroit",
        country: "United States",
        city: "Detroit",
    },
    {
        zone: "America/Kentucky/Louisville",
        country: "United States",
        city: "Louisville",
    },
    {
        zone: "America/Kentucky/Monticello",
        country: "United States",
        city: "Monticello",
    },
    {
        zone: "America/Indiana/Indianapolis",
        country: "United States",
        city: "Indianapolis",
    },
    {
        zone: "America/Indiana/Vincennes",
        country: "United States",
        city: "Vincennes",
    },
    {
        zone: "America/Indiana/Winamac",
        country: "United States",
        city: "Winamac",
    },
    {
        zone: "America/Indiana/Marengo",
        country: "United States",
        city: "Marengo",
    },
    {
        zone: "America/Indiana/Petersburg",
        country: "United States",
        city: "Petersburg",
    },
    {
        zone: "America/Indiana/Vevay",
        country: "United States",
        city: "Vevay",
    },
    {
        zone: "America/Chicago",
        country: "United States",
        city: "Chicago",
    },
    {
        zone: "America/Indiana/Tell_City",
        country: "United States",
        city: "Tell City",
    },
    {
        zone: "America/Indiana/Knox",
        country: "United States",
        city: "Knox",
    },
    {
        zone: "America/Menominee",
        country: "United States",
        city: "Menominee",
    },
    {
        zone: "America/North_Dakota/Center",
        country: "United States",
        city: "Center",
    },
    {
        zone: "America/North_Dakota/New_Salem",
        country: "United States",
        city: "New Salem",
    },
    {
        zone: "America/North_Dakota/Beulah",
        country: "United States",
        city: "Beulah",
    },
    {
        zone: "America/Denver",
        country: "United States",
        city: "Denver",
    },
    {
        zone: "America/Boise",
        country: "United States",
        city: "Boise",
    },
    {
        zone: "America/Phoenix",
        country: "United States",
        city: "Phoenix",
    },
    {
        zone: "America/Los_Angeles",
        country: "United States",
        city: "Los Angeles",
    },
    {
        zone: "America/Anchorage",
        country: "United States",
        city: "Anchorage",
    },
    {
        zone: "America/Juneau",
        country: "United States",
        city: "Juneau",
    },
    {
        zone: "America/Sitka",
        country: "United States",
        city: "Sitka",
    },
    {
        zone: "America/Metlakatla",
        country: "United States",
        city: "Metlakatla",
    },
    {
        zone: "America/Yakutat",
        country: "United States",
        city: "Yakutat",
    },
    {
        zone: "America/Nome",
        country: "United States",
        city: "Nome",
    },
    {
        zone: "America/Adak",
        country: "United States",
        city: "Adak",
    },
    {
        zone: "Pacific/Honolulu",
        country: "United States",
        city: "Honolulu",
    },
    {
        zone: "America/Montevideo",
        country: "Uruguay",
        city: "Montevideo",
    },
    {
        zone: "Asia/Samarkand",
        country: "Uzbekistan",
        city: "Samarkand",
    },
    {
        zone: "Asia/Tashkent",
        country: "Uzbekistan",
        city: "Tashkent",
    },
    {
        zone: "Europe/Vatican",
        country: "Vatican City",
        city: "Vatican",
    },
    {
        zone: "America/St_Vincent",
        country: "Saint Vincent and the Grenadines",
        city: "St Vincent",
    },
    {
        zone: "America/Caracas",
        country: "Venezuela",
        city: "Caracas",
    },
    {
        zone: "America/Tortola",
        country: "British Virgin Islands",
        city: "Tortola",
    },
    {
        zone: "America/St_Thomas",
        country: "U.S. Virgin Islands",
        city: "St Thomas",
    },
    {
        zone: "Asia/Ho_Chi_Minh",
        country: "Vietnam",
        city: "Ho Chi Minh",
    },
    {
        zone: "Pacific/Efate",
        country: "Vanuatu",
        city: "Efate",
    },
    {
        zone: "Pacific/Wallis",
        country: "Wallis and Futuna",
        city: "Wallis",
    },
    {
        zone: "Pacific/Apia",
        country: "Samoa",
        city: "Apia",
    },
    {
        zone: "Asia/Aden",
        country: "Yemen",
        city: "Aden",
    },
    {
        zone: "Indian/Mayotte",
        country: "Mayotte",
        city: "Mayotte",
    },
    {
        zone: "Africa/Johannesburg",
        country: "South Africa",
        city: "Johannesburg",
    },
    {
        zone: "Africa/Lusaka",
        country: "Zambia",
        city: "Lusaka",
    },
    {
        zone: "Africa/Harare",
        country: "Zimbabwe",
        city: "Harare",
    },
];

export default zones;
