FROM mongo:3.4.18-jessie

COPY some_initialization_script.sh /docker-entrypoint-initdb.d/

EXPOSE 27017

CMD ["mongod"]