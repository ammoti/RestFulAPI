# Developing a RESTful API With Node and TypeScript
## Project Sturectıre
    .
    ├── build                   # Compiled files (alternatively `dist`)
    ├── src                     # Source files (alternatively `lib` or `app`)
        └── auth                # Auth Layer
        └── controllers         # Have all controllers
        └── data                # Included repository and json file
        └── models              # Included Models according to json file
    ├── test                    # Automated tests (alternatively `spec` or `tests`)
    ├── tools                   # Tools and utilities
    ├── LICENSE
    └── README.md
    └── tsconfig.config         # typescript config file

## Want to use this project?

1. Fork/Clone
2. Install dependencies - `npm install`
3. Compile - `npm run build`
4. Run the development server - `npm start`
5. Test - `npm test`

## Controller
There are many routes
If you call collection you have to call "/api/collection"
If you call posts you have to call "/api/posts"
If you call albums you have to call "/api/albums"
If you call users you have to call "/api/users"

## Auth
You have to call api with this headers ==> [{"key":"Authorization","value":"Bearer af24353tdsfw","description":""}]

