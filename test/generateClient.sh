curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed
  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum NO DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"No","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed


  curl 'http://localhost:5001/new-client' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: en-US,en;q=0.9' \
  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcwMDA1NjI2OCwianRpIjoiYjM2ZDU2NDUtZWMzMC00NzBmLWE4YTUtMGVhNTVjMjNiZThlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Impvbi5tLnJvc2VuYmx1bUBnbWFpbC5jb20iLCJuYmYiOjE3MDAwNTYyNjgsImV4cCI6MTcwMDA1OTg2OH0.Hz1z8qKEJNDiXdLruFIjCXnX8Z0r0scanHNYutvdqCs' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:5173' \
  -H 'Pragma: no-cache' \
  -H 'Referer: http://localhost:5173/' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-site' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36' \
  -H 'sec-ch-ua: "Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  --data-raw '{"client_name":"Jonathan Rosenblum DWI","todays_date":"2023-11-13","fax_number":"516-404-8703","complaint_violation_ticket_numbers":"1217EGFHD","court_house_name":"Hewlett main Court","court_house_address":"1 Main Street","court_house_city":"Bogota Borough","court_house_state":"NJ","court_house_zip":"07095","court_house_county":"Bergen County","client_email":"jon@gmail.com","incident_date":"2023-10-13","case_status":"OPEN","dwi_status":"Yes","credit_card_number":"124321","credit_card_expiration":"12/12","credit_card_cvv":"122","client_balance":"122","payment_type":"Credit Card","credit_card_type":"Visa"}' \
  --compressed