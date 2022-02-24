FROM node:10

RUN npm install pm2@latest -g

ADD . /appDir
WORKDIR /appDir

CMD ["pm2-runtime", "start", "start.sh"]

EXPOSE 6006