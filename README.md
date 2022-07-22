# Cloud Resume Frontend

The frontend code for my cloud resume ([resume.laripping.com](https://resume.laripping.com)), created as part of the [Cloud Resume Challenge](https://cloudresumechallenge.dev/)

This project contains

1. the HTML & CSS for the UI
2. some minimal JavaScript that fetches the visitor count from [the backend](https://github.com/laripping/cloud-resume-backend)
3. A Github Action that auto-deploys code pushed to the master branch on the S3 bucket where it's served from



## Local Development

Ensure you're running Python3.8 (e.g. using [pyenv](https://github.com/pyenv/pyenv)) and 

```bash
pip3 install httpwatcher
httpwatcher --root .
# visit http://localhost:5555/resume.html
```

