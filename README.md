# React :octocat:
frontendmasters complete into React v7 

NPM

PRETTIER
`> npm prettier 'file' --write` auto format file
create file `.prettierrc`

install REACT 
`npm i react@17.0.2 react-dom@17.0.2`
```
create in package.js
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
```

PARCEL
`> npm i -D parcel`

in 'package.json':
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "parcel src/index.html"
}
```

`npm run dev` create 2 directory ".parcel-cache" and "dist" (in case of error delete it and retry run dev)

index in "http://localhost:1234"
