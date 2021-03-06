import React from "react";
import memesData from "../../memesData";
import "./index.css"

function Meme() {

const [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"})
    
const [allMemeImages,setAllMemeImages] = React.useState([])

React.useEffect(() => {
  async function getMemes(){
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemeImages(data.data.memes)
  }
  getMemes()
        
  }, [])

function onClick(){
  const randomIndex = Math.floor(Math.random()*allMemeImages.length)
  setMeme(prevMeme => ({...prevMeme,"randomImage":allMemeImages[randomIndex].url}))
}

function updateValue(event){
  const {name,value} = event.target
  setMeme( preMeme => ({...preMeme,
            [name]:value}
        ))
}

return(
  <main>
    <div className="form">
      <input type="text" placeholder="top text" className="form--input" name="topText" value={meme.topText} onChange = {updateValue}/>
      <input type="text" placeholder="bottom text" className="form--input" name="bottomText" onChange = {updateValue} value={meme.bottomText} />
      <button className="form--button" onClick={onClick}>
        Get a new meme image 🖼
      </button>
    </div>
    <div className="meme">
      <img src={meme.randomImage} className="meme--image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
    </div>
  </main> 
)}

export default Meme;
