const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

var result = [
    {
        "id": 1,
        "name": "Rahul",
        "dateOfJoining": "2020-11-11",
        "designation": "Software Developer",
        "project": "Google",
        "reportingManager": "Indradeep",
        "experience": 5,
        "salary": 5000,
        "billing": 100
    },
    {
        "id": 2,
        "name": "Anjali",
        "dateOfJoining": "2020-07-25",
        "designation": "Software Developer",
        "project": "Google",
        "reportingManager": "Indradeep",
        "experience": 6,
        "salary": 6000,
        "billing": 200
    },
    {
        "id": 3,
        "name": "Andy",
        "dateOfJoining": "2019-06-25",
        "designation": "UI Developer",
        "project": "Facebook",
        "reportingManager": "Venkat",
        "experience": 4,
        "salary": 6000,
        "billing": 100
    },
    {
        "id": 4,
        "name": "Suresh",
        "dateOfJoining": "2021-06-25",
        "designation": "UI Developer",
        "project": "Facebook",
        "reportingManager": "Venkat",
        "experience": 7,
        "salary": 8000,
        "billing": 100
    },
    {
        "id": 5,
        "name": "Rakesh",
        "dateOfJoining": "2022-01-24",
        "designation": "UI Developer",
        "project": "Facebook",
        "reportingManager": "Venkat",
        "experience": 3,
        "salary": 4000,
        "billing": 100
    }
]


app.use('/login', (req, res) => {
  res.send({
    result
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));