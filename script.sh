# Set NTP timezone
timedatectl set-timezone  Asia/Kolkata

# Update and Upgrade Ubuntu Packages
sudo apt update
sudo apt upgrade -y

# Install docker
sudo apt install -y docker.io git curl
sudo usermod -aG docker vagrant
sudo service enable docker

# Install Docker compose
sudo curl -L https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Install npm
sudo apt install npm -y
