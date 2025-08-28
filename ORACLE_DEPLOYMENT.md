# Oracle Cloud Deployment Guide

## Step 1: Create Oracle Cloud Account
1. Go to https://cloud.oracle.com/free
2. Sign up for Always Free account
3. Complete verification process

## Step 2: Create Compute Instance
1. Navigate to: Compute → Instances
2. Click "Create Instance"
3. Configuration:
   - Name: ems-backend-server
   - Image: Oracle Linux 8
   - Shape: VM.Standard.A1.Flex (Always Free)
   - OCPU: 1, Memory: 6GB
   - Download SSH key pair
   - Save private key securely

## Step 3: Configure Network Security
1. Go to: Networking → Virtual Cloud Networks
2. Select your VCN → Security Lists → Default Security List
3. Add Ingress Rule:
   - Source CIDR: 0.0.0.0/0
   - IP Protocol: TCP
   - Destination Port Range: 8080

## Step 4: Connect to Instance
```bash
# Connect via SSH (replace with your private key and public IP)
ssh -i private_key.pem opc@YOUR_INSTANCE_PUBLIC_IP
```

## Step 5: Deploy Application
```bash
# Copy the deploy-oracle.sh script to your instance
# Run the deployment script
chmod +x deploy-oracle.sh
./deploy-oracle.sh
```

## Step 6: Set up as Service (Optional)
```bash
# Copy ems-backend.service to /etc/systemd/system/
sudo cp ems-backend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable ems-backend
sudo systemctl start ems-backend
```

## Step 7: Access Your Application
```
Backend API: http://YOUR_INSTANCE_PUBLIC_IP:8080/api/employees
```

## Your Database Credentials (Already Configured)
- DATABASE_URL: jdbc:mysql://sql12.freesqldatabase.com:3306/sql12796422
- DATABASE_USERNAME: sql12796422
- DATABASE_PASSWORD: c8lcKVJtNt
