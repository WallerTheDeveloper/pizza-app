FROM maven:3.8-openjdk-18
WORKDIR /pizza-app
COPY . /pizza-app/
RUN mvn clean install
CMD mvn spring-boot:run