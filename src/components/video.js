
import ReactPlayer from 'react-player'

export const Video = () => {
    return (
        <>
        
            <div className="card-body1" style={{textAlign:"center"}}>
                <h5 className="card-title">BABY YODA SONG</h5>
                <p className="card-text">
Have you heard the song of our beautiful baby yoda? If your answer is no, I invite you to see the following video</p>
            </div>
            <div className="video2" style={{ height: "45vh", width: "80vh" }}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=LXXkTPUHdMw&ab_channel=ChewieCatt'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                />
            </div>
        </>
    )
}