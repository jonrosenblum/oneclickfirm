curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"sddwf","todays_date":"2023-11-09","fax_number":"32424224","complaint_violation_ticket_numbers":"sda2323","court_house_name":"adda","court_house_address":"sdadada","court_house_city":"adsda","court_house_state":"as","court_house_zip":"22323","court_house_county":"adsaa","client_email":"jon.m.rosenblum@gmail.com","incident_date":"2023-11-10","case_status":"OPEN","dwi_status":"No","credit_card_number":"232323232","credit_card_expiration":"19/23","credit_card_cvv":"239","client_balance":"199"}' \
  --compressed