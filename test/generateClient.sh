curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"sddwf","todays_date":"2023-11-09","fax_number":"32424224","complaint_violation_ticket_numbers":"sda2323","court_house_name":"adda","court_house_address":"sdadada","court_house_city":"adsda","court_house_state":"as","court_house_zip":"22323","court_house_county":"adsaa","client_email":"jon.m.rosenblum@gmail.com","incident_date":"2023-11-10","case_status":"OPEN","dwi_status":"No","credit_card_number":"232323232","credit_card_expiration":"19/23","credit_card_cvv":"239", "payment_type":"Zelle"}' \
  --compressed

  curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Client1","todays_date":"2023-11-09","fax_number":"12345678","complaint_violation_ticket_numbers":"ABCD123","court_house_name":"Court1","court_house_address":"Address1","court_house_city":"City1","court_house_state":"CA","court_house_zip":"12345","court_house_county":"County1","client_email":"client1@example.com","incident_date":"2023-11-10","case_status":"OPEN","dwi_status":"No","credit_card_number":"1111222233334444","credit_card_expiration":"12/24","credit_card_cvv":"123","client_balance":"100", "payment_type":"Zelle"}' \
  --compressed


curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Client1","todays_date":"2023-11-09","fax_number":"12345678","complaint_violation_ticket_numbers":"ABCD123","court_house_name":"Court1","court_house_address":"Address1","court_house_city":"City1","court_house_state":"CA","court_house_zip":"12345","court_house_county":"County1","client_email":"client1@example.com","incident_date":"2023-11-10","case_status":"OPEN","dwi_status":"No","credit_card_number":"1111222233334444","credit_card_expiration":"12/24","credit_card_cvv":"123","client_balance":"100", "payment_type":"Zelle"}' \
  --compressed

curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Client3","todays_date":"2023-11-09","fax_number":"87654321","complaint_violation_ticket_numbers":"IJKL789","court_house_name":"Court3","court_house_address":"Address3","court_house_city":"City3","court_house_state":"TX","court_house_zip":"98765","court_house_county":"County3","client_email":"client3@example.com","incident_date":"2023-11-12","case_status":"PENDING","dwi_status":"Unknown","credit_card_number":"4444333322221111","credit_card_expiration":"03/25","credit_card_cvv":"789","client_balance":"300", "payment_type":"Zelle"}' \
  --compressed

  curl 'http://localhost:5001/new-client' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'Referer: http://localhost:5173/' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Client4","todays_date":"2023-11-09","fax_number":"12348765","complaint_violation_ticket_numbers":"MNOP123","court_house_name":"Court4","court_house_address":"Address4","court_house_city":"City4","court_house_state":"FL","court_house_zip":"87654","court_house_county":"County4","client_email":"client4@example.com","incident_date":"2023-11-13","case_status":"DISMISSED","dwi_status":"No","credit_card_number":"9876543212345678","credit_card_expiration":"09/27","credit_card_cvv":"654","client_balance":"400", "payment_type":"Zelle"}' \
  --compressed

  --compressed


# # Define the cURL command
# CURL_COMMAND="curl 'http://localhost:5001/new-client' -H 'sec-ch-ua: \"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"' -H 'Accept: application/json, text/plain, */*' -H 'Content-Type: application/json' -H 'Referer: http://localhost:5173/' -H 'sec-ch-ua-mobile: ?0' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' -H 'sec-ch-ua-platform: \"macOS\"' --data-raw '{\"client_name\":\"sddwf\",\"todays_date\":\"2023-11-09\",\"fax_number\":\"32424224\",\"complaint_violation_ticket_numbers\":\"sda2323\",\"court_house_name\":\"adda\",\"court_house_address\":\"sdadada\",\"court_house_city\":\"adsda\",\"court_house_state\":\"as\",\"court_house_zip\":\"22323\",\"court_house_county\":\"adsaa\",\"client_email\":\"jon.m.rosenblum@gmail.com\",\"incident_date\":\"2023-11-10\",\"case_status\":\"OPEN\",\"dwi_status\":\"No\",\"credit_card_number\":\"232323232\",\"credit_card_expiration\":\"19/23\",\"credit_card_cvv\":\"239\",\"client_balance\":\"199\"}' --compressed"

# # Run the cURL command 100 times
# for i in {1..100}; do
#   echo "Running cURL request $i"
#   $CURL_COMMAND
# done