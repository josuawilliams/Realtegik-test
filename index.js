const editly = require('editly');
const axios = require('axios');
async function PlayVideo() {
  try {
    const data = await axios({
      method: 'GET',
      url: 'https://dummyjson.com/products',
    });
    const dataVideos = data.data.products.splice(0, 5)
    const videos = dataVideos.map(el => {
      return {
        duration: 3, layers: [
          { type: 'image', path: el.thumbnail },
          { type: 'title', text: el.title },
          { type: 'subtitle', text: el.description, backgroundColor: 'rgba(5,5,5,5.5)'}
        ]
      }
    })
    await editly(
      {
        width: 900,
        height: 1600,
        outPath: './Exercise.mp4',
        defaults: {
          layer: { fontPath: './assets/Patua_One/PatuaOne-Regular.ttf' },
        },
        allowRemoteRequests: true,
        clips: videos
      }
    )
  } catch (error) {
    console.log(error);
  }
}

PlayVideo()

