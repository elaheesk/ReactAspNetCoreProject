# Stage 1: Build the .NET Core application
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy everything to the container and restore dependencies
COPY . .
RUN dotnet restore

# Publish the application to the /app directory
RUN dotnet publish -c Release -o /app

# Stage 2: Create the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build /app .

# Expose the default HTTP port
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "ReactAspNetCoreProject.Server.dll"]
