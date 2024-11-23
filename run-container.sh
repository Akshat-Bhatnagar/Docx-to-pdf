#!/bin/bash

# Check for Docker Compose installation
if ! [ -x "$(command -v docker-compose)" ]; then
  echo "Error: Docker Compose is not installed or available in PATH." >&2
  exit 1
fi

echo "Cleaning up old containers..."
docker-compose down

echo "Building and starting containers..."
docker-compose up --build

echo "To stop the containers, press Ctrl+C and run: docker-compose down"
