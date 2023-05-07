# CS-361: Software Engineering


Microservice Request and Recieve Instructions: 

Here are some links to documentation: \
 https://googleapis.dev/nodejs/googleapis/latest/ \
 https://developers.google.com/drive/api/quickstart/nodejs \
 https://developers.google.com/youtube/v3/docs/search 

To make a request you need to pass the microservice a query stored in the variable searchQuery: 

![Instructions](https://user-images.githubusercontent.com/72106175/236707582-b77a95f2-0911-4834-ad55-f50b98cd0d5b.png) 


The microservice will form a URL to send to the YouTube API 

![Instructions2](https://user-images.githubusercontent.com/72106175/236707592-1ef81432-e7f7-48d0-bc1f-307dc1e9b1d5.png) 


You will need to generate your own API key to use with the micro service. \
Be sure you have routed to the /search route. 

![Instructions3](https://user-images.githubusercontent.com/72106175/236707595-cdf29742-a3c6-47d1-974e-d0a7602c49d7.png) 

You will recieve the title  and videoId, which is the last part of this url https://www.youtube.com/watch?v=, so the complete url would be like this: \
https://www.youtube.com/watch?v=guMmZrnFx70 \
title: "Kobe Bryant's Best 40 Dunks Of His NBA Career!" \
videoId: guMmZrnFx70 \

You can then embed the video on the page.

![Instructions4](https://user-images.githubusercontent.com/72106175/236707598-d24eceea-abe9-4392-8dac-33d36322eede.png)
