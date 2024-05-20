# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the project jar file into the container at /app
COPY target/property-management-backend-0.0.1-SNAPSHOT.jar /app/property-management-backend.jar

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "property-management-backend.jar"]
