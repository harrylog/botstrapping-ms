 docker build -t hrylog/video-stream --file Dockerfile .

 docker run -d -p 3000:3000 -e Port=3000 hrylog/video-stream

 docker exec -it 640 bash  


 hrylog.azurecr.io/video-stream:latest

 docker run -d -p 3000:3000 -e Port=3000  hrylog.azurecr.io/video-stream:latest


 http://localhost:3000/video?path=SampleVideo_1280x720_1mb.mp4

 PORT=3000

STORAGE_ACCOUNT_NAME=videos

STORAGE_ACCESS_KEY=5TI4gN9rFDJmtjX+47RMvbSuyKZR7dk33Gq84VF1pSAzLhT4rue+FZIGOTr7HNIGu0l01vryMfg5+AStItJpYA==
