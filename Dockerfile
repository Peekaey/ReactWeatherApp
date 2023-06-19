FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["ReactWeatherApp.csproj", "./"]
RUN dotnet restore "ReactWeatherApp.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "ReactWeatherApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ReactWeatherApp.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ReactWeatherApp.dll"]
