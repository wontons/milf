#! /bin/bash
echo "deploying frontend to s3..."
export REACT_APP_API_URL=/api
npm run build
aws s3 sync build/ s3://milf-frontend
echo "...done"
echo "make sure to invalidate cache on cloudfront after running this command"
