# Deploy
## Local
docker-compose build
docker login 
docker push rocketfirmcom/eksk-next:0.0.1
## Remote ssh
ssh root@rocketfirm.net 
docker pull rocketfirmcom/eksk-next:0.0.1
## Remote plesk
Docker -> rocketfirmcom/eksk-next -> run -> 0.0.1
