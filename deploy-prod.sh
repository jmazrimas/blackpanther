#!/bin/bash
read -p "Deploy to PROD? (y/n)" yn
if [ $yn = y ]
then
  echo Deploying!
  aws s3 sync build s3://groominglounge/blackpanther --profile grooming
  aws s3 cp build/index.html s3://groominglounge/ --profile grooming
fi
