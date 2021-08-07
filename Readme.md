docker build -t nodeapp .

docker run --name nodeapp -p 2222:1111 nodeapp

Some what useful commands:
docker ps -a
docker stop IMAGE_NAME
docker rm IMAGE_NAME
