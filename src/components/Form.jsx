import { useState , useEffect } from 'react'
import { text } from '@fortawesome/fontawesome-svg-core'

export default function Form() {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(data => data.json())
      .then(Api => {
        setData(Api.data.memes.map(meme => meme.url))
      })
  }, [])


  let meme = {
    topText: '',
    bottomText: '',
    img: 'http://i.imgflip.com/1bij.jpg'
  }
  const [URL, nextUrl] = useState(meme.img)

  let nani = () => nextUrl(function (pre) {
    let rand = data[(Math.random() * data.length) | 0]
    return pre = rand
  })

  const [Text, setText] = useState(meme)

  function hadelTextChange(event) {
    const {name, value} = event.target

    setText(text => {
      return {
        ...text,
        [name]: value
      }
    })
    console.log(event.target.name)
  }

  return (
    <section className="Gen-section">
      <div className="Meme">
        <div className="inputs">
          <input
            type="text"
            placeholder="Top"
            className="Top"
            onChange={hadelTextChange}
            name='topText'
            value={text.topText}
          />
          <input
            type="text"
            placeholder="Bottom"
            className="Bottom"
            onChange={hadelTextChange}
            name='bottomText'
            value={text.bottomText}
          />
        </div>
        <button className="Sub-button" onClick={nani}>Get a new meme image <img src="https: //thumbnail.imgbin.com/2/18/6/gallery-icon-electronic-and-web-element-collection-icon-7q0Z9NTQ_t.jpg" /></button>
      </div>
      <div className="img-G">
        <img src={URL} alt="" className="Final" />
        <div className="top-text meme--text">{Text.topText}</div>
        <div className="bottom-text meme--text">{Text.bottomText}</div>
      </div>
    </section>
  )
} 
