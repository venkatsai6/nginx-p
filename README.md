# nginx-p
Exploring NGINX


NGINX
- It's a gateway between the internet and back-end infrastructure.
- It's used as a web server, reverse proxy, load balancer and HTTP cache to handle the demands of high traffic sites.
- To find the server used in a web app, direct to Network in developer tools and head over to Response headers, you will find the server if the web app uses it.
- The main purpose of using NGINX in a web app to handle the traffic from the users. Example, normally a web app sends user request directly to the server like AWS etc., if the web app experiences a lot of users accessing or requesting the web app the operations directly to server, it crashes. So, here NGINX can be used as a load balancer to get requests from the user and pass the responses from web server to the users efficiently.
- It's very useful for scaling the web apps.