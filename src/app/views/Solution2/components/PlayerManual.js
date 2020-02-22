// import React, { useState, useEffect, useContext } from 'react'
// import styled from 'styled-components'

// import PlayIcon from '../../../assets/play.svg'
// import StopIcon from '../../../assets/stop.svg'
// import { SpeechContext } from './SpeechSynthesisContainer'

// const useAudio = url => {
//   const [audio] = useState(new Audio(url))

//   // useEffect(() => {
//   //   audio.addEventListener('ended', () => setPlaying(false))
//   //   return () => {
//   //     audio.removeEventListener('ended', () => setPlaying(false))
//   //   }
//   // }, [])

//   // return [playing, toggle]
// }

// const fetchAudioAndPlay = url => {
//   const [audio] = useState(new Audio(url))
//   // Show loading animation.
//   let playPromise = audio.play()

//   if (playPromise !== undefined) {
//     playPromise
//       .then(_ => {
//         // Automatic playback started!
//         // Show playing UI.
//         return <Icon src={StopIcon} />
//       })
//       .catch(error => {
//         // Auto-play was prevented
//         // Show paused UI.
//         return <Icon src={PlayIcon} onClick={toggle} />
//       })
//   }
// }

// const Player = () => {
//   const { audioUrl: url, fetchData: fetchAudioAndPlay } = useContext(
//     SpeechContext
//   )

//   useEffect(() => {
//     const [audio] = useState(new Audio(url))
//     return () => {
//       cleanup
//     };
//   }, [])

//   // const [playing, toggle] = useAudio(audioUrl, fetchAudioAndPlay)

//   // return (
//   //   <div
//   //     onClick={() => {
//   //       toggle()
//   //       // fetchAudioAndPlay()
//   //     }}
//   //   >
//   //     {playing ? (
//   //       <Icon src={StopIcon} />
//   //     ) : (
//   //       <Icon src={PlayIcon} onClick={toggle} />
//   //     )}
//   //   </div>
//   // )
//   return fetchAudioAndPlay
// }

// const Icon = styled.img`
//   cursor: pointer;
// `

// export default Player
