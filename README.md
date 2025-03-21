# Average Calculator Microservice
A Node.js microservice that calculates the average of numbers fetched from a test server while maintaining a sliding window of size 10.

# Features
- Fetches numbers (prime, fibonacci, even, random) from a test server
- Auto Auth Refresh → Dynamically fetches a new token before expiry

# Configuration (.env)
```
PORT=9876
THIRD_PARTY_BASE_URL=http://20.244.56.144/test
WINDOW_SIZE=

Auth Credentials
COMPANY_NAME=
CLIENT_ID=
CLIENT_SECRET=
OWNER_NAME=
OWNER_EMAIL=
ROLL_NO=
```

# Running the Microservice
`npm run dev`

# Screenshots

![image](https://github.com/user-attachments/assets/43ca6d0d-221f-426b-a04d-262250ba5c36)

![image](https://github.com/user-attachments/assets/2fe17191-a54e-4c47-9fd0-6e91b18ef396)



