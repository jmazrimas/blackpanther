#!/bin/bash
aws s3 sync build s3://groominglounge-stage/blackpanther
aws s3 cp build/index.html s3://groominglounge-stage/
