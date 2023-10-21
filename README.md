
# Angular Dashboard App with Chart.js and Sidebar

## Description
This project is an Angular-based web application that features a dynamic dashboard. It includes a sidebar for navigation and utilizes Chart.js for data visualization.

## Features
- Dynamic Dashboard
- Navigation Sidebar
- Data Visualization with Chart.js

## Prerequisites
- Node.js and npm installed
- Angular CLI

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-username/your-angular-app.git
cd your-angular-app
```

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
ng serve
```
Navigate to `http://localhost:4200/` to see the app running.

## Dockerization

### Build Docker Image
```bash
docker build -t your-image-name .
```

### Run Docker Container
```bash
docker run -p 8080:80 your-image-name
```
Navigate to `http://localhost:8080/` to see the app running in the Docker container.

### Prerequisites
- Google Cloud SDK
- GCP account with App Engine enabled
- GitHub repository with this project
- Setting up CI/CD

### Authenticate with Google Cloud:
- gcloud auth login
- Navigate to GCP Console and go to your project's App Engine Dashboard.
- Setup a Cloud Build trigger to point to your GitHub repository.
- Configure the build to deploy to App Engine upon successful build.

## Contributing
If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License
This project is open-sourced under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Author
- [Alora Greer](mailto:alora.greerl@gmail.com)

