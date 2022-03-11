# HBO Max Clone

<p align="center">
  <img src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/hbomax-gif.gif"/> 
<p/>

<p align="center">This is a clone app by HBO Max using React Native Expo</p>

## Screenshots

<table align="center">
  <tr>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-0.png" />
    </td>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-1.png" />
    </td>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-2.png" />
    </td>
  </tr>
  <tr>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-3.png" />
    </td>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-4.png" />
    </td>
    <td valign="top">
      <img width="280" src="https://github.com/mcosta21/hbo-max-react-native-clone/blob/main/.github/screenshot-5.png" />
    </td>
  </tr>
</table>

## Run yourself

You'll need to install some Android emulator (Ex: [Android Studio](https://developer.android.com/studio)), or using [Expo Go](https://expo.dev/client) app

```bash
# Clone the repository
$ git clone https://github.com/mcosta21/hbo-max-react-native-clone

# Access the folder
$ cd hbo-max-react-native-clone

# Install the dependencies
$ yarn

# Launch the application
$ yarn start || yarn android || yarn ios
```

## Getting data

This app is getting the movies and series by [The Movie Database (TMDB)](https://www.themoviedb.org/) API, so it needs a API Key to works. 

However, I intercep all error requests when this key is not defined, and *mock* the data.

```javascript
// services/themoviedb/index.ts

theMovieDbApi.interceptors.response.use((response) => {
  return response;
}, (error) => {
  const routeUrl = error.request.responseURL as string;

  if(routeUrl.includes('https://api.themoviedb.org/3/movie/') ||
     routeUrl.includes('https://api.themoviedb.org/3/tv/')) {
       const id = routeUrl.match(patternId);
       return { data: id === null ? dataFake.results[0] : dataFake.results.find(x => x.id === Number(String(id[0]).replace('?', ''))) }
     }

  return { data: dataFake };
});
```

> Define the API Key on **THEMOVIEDB_CLIENT_ID** in .env file


## Technologies

<p align="center">
 <a href="https://reactnative.dev/" target="_blank">
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" alt="React Native" height="50" />
 </a>
  &nbsp&nbsp  
 <a href="https://expo.dev/" target="_blank">
   <img src="https://image.winudf.com/v2/image1/aG9zdC5leHAuZXhwb25lbnRfaWNvbl8xNjAxNzEwNzk5XzAxMA/icon.png?w=&fakeurl=1" alt="Expo" height="50" />
 </a>
  &nbsp&nbsp
  <a href="https://styled-components.com/" target="_blank">
    <img src="https://ih1.redbubble.net/image.446304524.2298/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="Styled Components" height="50">
  </a>
  &nbsp&nbsp
  <a href="https://axios-http.com/docs/intro" target="_blank">
    <img src="https://miro.medium.com/max/1400/1*cNzp6bhkU1Zf53QyVIgDog.png" alt="Axios" height="50">
  </a>
  &nbsp&nbsp
  <a href="https://www.themoviedb.org/" target="_blank">
    <img src="https://github.com/mcosta21/netflix-clone-reactjs/blob/master/docs/icon-tmdb.png?raw=true" alt="TMDB" height="50">
  </a>
</p>

<br/>
<br/>

> Developed by [Marcio Costa](https://www.linkedin.com/in/mcosta21/).
