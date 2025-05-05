
#!/bin/bash

# Make script executable
chmod +x setup.sh

# Install npm dependencies
echo "Installing npm dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Copy configuration files
echo "Copying configuration files..."
cp -r client/src/components/* ./components/
cp client/src/hooks/* ./hooks/
cp client/src/lib/* ./lib/
cp client/src/pages/* ./pages/

# Set up environment variables
echo "Setting up environment variables..."
touch .env
echo "NODE_ENV=development" >> .env
echo "PORT=5000" >> .env

# Set correct permissions
echo "Setting permissions..."
chmod -R 755 ./components
chmod -R 755 ./hooks
chmod -R 755 ./lib
chmod -R 755 ./pages

echo "Setup complete! You can now run the development server with 'npm run dev'"
