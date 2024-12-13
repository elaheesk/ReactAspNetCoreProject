# Use .NET 8 runtime for running the app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

# Use .NET 8 SDK for building the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .

# Restore dependencies
RUN dotnet restore "ReactAspNetCoreProject.Server.csproj"

# Build the application
RUN dotnet publish "ReactAspNetCoreProject.Server.csproj" -c Release -o /app/publish

# Final stage for runtime
FROM base AS final
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "ReactAspNetCoreProject.Server.dll"]
