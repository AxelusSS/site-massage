import { useEffect, useState } from "react"

const videoUrls = [
  "https://www.youtube.com/watch?v=e5hoEDxwvDg",
  "https://www.youtube.com/watch?v=2gO1v2GPMFk",
  "https://www.youtube.com/watch?v=36YnV9STBqc"
]
function extractVideoId(url: string): string {
  const match = url.match(/v=([^&]+)/)
  return match ? match[1] : ""
}

export default function FloatingYoutubePlayer() {
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)]
    const id = extractVideoId(randomUrl)
    setVideoId(id)
  }, [])

  if (!videoId) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 shadow-xl rounded-lg overflow-hidden">
      <iframe
        width="400"
        height="225"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1`}
        title="Lecteur vidéo YouTube"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  )
}
