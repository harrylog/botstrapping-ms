 docker build -t hrylog/video-stream --file Dockerfile .

 docker run -d -p 3000:3000 -e Port=3000 hrylog/video-stream