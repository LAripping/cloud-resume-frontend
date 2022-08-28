# Cloud Resume Frontend

The frontend code for my cloud resume ([resume.laripping.com](https://resume.laripping.com)), created as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/)

This project contains

1. the HTML & CSS for the UI
2. some minimal JavaScript that fetches the visitor count from [the backend](https://github.com/laripping/cloud-resume-backend) via the [API](#The API)
3. A [Github Action](.github/workflows/frontent-wf.yml) that auto-deploys code pushed to the master branch on the S3 bucket where it's served from


## The API

A simple REST API was developed to bridge the frontend and backend code ([link](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/LAripping/cloud-resume-backend/master/apispec.yml)) 


![](https://raw.githubusercontent.com/LAripping/cloud-resume-backend/55397ec0255f2d8b265dc0940ccdb87fb89ca19a/apispec-expand.png)

## Local Development

Ensure you're running Python3.8 (e.g. using [pyenv](https://github.com/pyenv/pyenv)) and 

```bash
pip3 install httpwatcher
httpwatcher --root . 
# or pyenv exec httpwatcher --root . 
# visit http://localhost:5555/resume.html
```

