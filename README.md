
# Angular Dashboard App with Chart.js and Sidebar

## Description
This Angular-based web application features a dynamic dashboard, complete with a navigation sidebar and data visualization using Chart.js.

## Features
- Dynamic Dashboard
- Navigation Sidebar
- Data Visualization with Chart.js

## Prerequisites
- Node.js and npm
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

### Local Development with Docker 

1. **Navigate to the Location of Dockerfile**: Navigate to the location of each Dockerfile (for frontend and backend).

2. **Build and Tag the Images**: Build the Docker images for both the frontend and backend locally, which packages your applications along with all their dependencies.

    ```bash
    docker build -t frontend-image:latest .
    docker build -t backend-image:latest .
    ```

3. **Run the Docker Containers Locally**: After the images are built, run them as containers locally. Replace `:latest` with your preferred tag if needed.

    ```bash
    docker run -p 8080:8080 frontend-image:latest
    docker run -p 8081:8081 backend-image:latest
    ```

    This runs the frontend on `http://localhost:8080` and the backend on `http://localhost:8081`.

### Automated Deployment on Google Cloud Platform (GCP)

#### Prerequisites
- Google Cloud SDK
- GCP account with App Engine enabled
- GitHub repository for this project

#### Steps
1. **Authenticate with Google Cloud**: Run `gcloud auth login`.
2. Navigate to your project's App Engine Dashboard in the GCP Console.
3. Set up a Cloud Build trigger pointing to your GitHub repository.
4. Configure the build to deploy to App Engine upon a successful build.

## Contributing
Feel free to fork the repository and make changes. Pull requests are warmly welcome.

## License
This project is open-sourced under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Author
- [Alora Greer](mailto:alora.greer@gmail.com)
