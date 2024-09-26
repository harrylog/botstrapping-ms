 docker build -t hrylog/video-stream --file Dockerfile .

 docker run -d -p 3000:3000 -e Port=3000 hrylog/video-stream

 docker exec -it 640 bash  


 hrylog.azurecr.io/video-stream:latest

 docker run -d -p 3000:3000 -e Port=3000  hrylog.azurecr.io/video-stream:latest


 http://localhost:3000/video?path=SampleVideo_1280x720_1mb.mp4


docker compose --env-file .env up --build

 docker login hrylog.azurecr.io --username hrylog --password 3UB3AD9fG8z5VTLpWr5FRzMtMT0w8YJv9BJQp5VTEK+ACRC5O3BK

 docker push hrylog.azurecr.io/video-stream:latest 

 http://localhost:4001/video?path=SampleVideo_1280x720_1mb.mp4
----------------------------chapter 4 exaample 3------------------------
 docker compose down --remove-orphans --volumes

docker compose build --no-cache && docker compose up --build --remove-orphans

http://localhost:4002/video?id=5d9e690ad76fe06a3d7ae416

http://localhost:4001/video?path=SampleVideo_1280x720_1mb.mp4

http://localhost:15672/#/