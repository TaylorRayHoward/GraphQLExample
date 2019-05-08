#!/usr/bin/env bash
export POSTGRES_PORT=5432
export POSTGRES_HOST=localhost
export POSTGRES_USER=graphql
export POSTGRES_PASSWORD=password
export POSTGRES_DB=graphql

echo "Starting PG"
docker rm -f graphql
docker build . -t graphql
docker run -d -p 5432:5432 --name graphql graphql
