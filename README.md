 docker build -t hrylog/video-stream --file Dockerfile .

 docker run -d -p 3000:3000 -e Port=3000 hrylog/video-stream

 docker exec -it 640 bash  


 hrylog.azurecr.io/video-stream:latest

 docker run -d -p 3000:3000 -e Port=3000  hrylog.azurecr.io/video-stream:latest


 http://localhost:3000/video?path=SampleVideo_1280x720_1mb.mp4


docker compose --env-file .env up --build