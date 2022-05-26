# CADT Test

## Install and start

Install and start the project by typing the commands:
```
npm install
npm run rundevel
```

The app runs in dev mode, you can watch it in your browser: ([http://localhost:3000](http://localhost:3000/)). In addition, the server is running in port 5000 ([http://localhost:5000](http://localhost:3000/)).

## App

### Folder structure

The App is a bootstrapping from `create-react-app` and the folder structure uses a similar config. There are many folders inside `src`: 

`components`: here there are all the components with their own scss module.

`hooks`: here there is the custom hook called `useGetData` which allows making the requests.

`views`: here there are two folders, one for each view `Designs` and `Setouts`. The structure inside these folders is the same as the `component` folder.

### Axios request

Axios request is made with a custom hook. `useGetData()` allows to make a get request to an API passing an URL as a parameter and returns de data.

### Styles

There is no UI kit implemented in the app, instead, the option was to make the styles from scratch using sass. The main reason was the opportunity to improve my style skills using scss modules, which allows having higher control over the styles.

## Challenges

### Deadline

Deadline is very important for me cause I was looking to do the maximum I could do in the time I was estimated. The test is not completed, just the main points are covered (except the test part). I could keep working on the bonus points but honestly, it'll delay the delivery so I prefer to stop at this point.

### Tests

Unfortunately, I haven't enough experience with tests (something that I'm learning by myself ), so there isn't unit testing implementation on the app.

### Typescript

I have experience with typescript but honestly, not so much. At this point, adding more difficulty to the test, typing the code wasn't an option, so I decided to make the test just with javascript.

### Conclusion

The test has been a great challenge for me and I have learned a lot from it. It also was motivating to learn more about unit testing and improving frontend development.

Thanks for your time!

