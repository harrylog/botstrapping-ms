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

docker exec -it db mongosh
use history
db.history.find().pretty().limit(5)






https://github.com/bootstrapping-microservices-2nd-edition/chapter-6

https://portal.azure.com/#@harry8loghotmail.onmicrosoft.com/resource/subscriptions/0db10612-d082-4523-a57b-cdb9f1747a03/resourceGroups/video-stream-ms/providers/Microsoft.Storage/storageAccounts/hrylog/containersList


Usage + quotas
https://portal.azure.com/#@harry8loghotmail.onmicrosoft.com/resource/subscriptions/0db10612-d082-4523-a57b-cdb9f1747a03/quotas


az provider list --query "[?registrationState=='NotRegistered']" -o table
"If you see relevant providers (like Microsoft.Compute), register them with:"
az provider register --namespace Microsoft.Compute

https://github.com/bootstrapping-microservices-2nd-edition/chapter-7