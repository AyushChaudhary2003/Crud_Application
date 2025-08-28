# Oracle Cloud Network Setup Commands

# 1. Configure firewall to allow port 8080
sudo firewall-cmd --permanent --add-port=8080/tcp
sudo firewall-cmd --reload

# 2. Configure iptables (if needed)
sudo iptables -I INPUT 1 -p tcp --dport 8080 -j ACCEPT
sudo service iptables save

# 3. Configure Security List in Oracle Cloud Console:
# - Go to Networking → Virtual Cloud Networks
# - Select your VCN → Security Lists
# - Add Ingress Rule:
#   - Source CIDR: 0.0.0.0/0
#   - IP Protocol: TCP
#   - Destination Port Range: 8080

# 4. Get your instance public IP:
curl ifconfig.me
