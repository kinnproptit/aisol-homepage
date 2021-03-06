import React, { Fragment, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../redux/action-creators/recognition'

import enviroments from '../../../environments'
import { SpeechRecognition } from './SpeechRecognition'

const print = console.log
const SILENT_THRESHOLD = 1000
const SILENT_DURATION = 10

const API_URL = enviroments.socketASR

let isConnected = false
let result = null // xâu text đang nhận dạng
let isStop = true // có đang DỪNG record audio hay không

let recorder = null // đối tượng recorder
let buffer = null // có chuyển về local được không?
let audioContext = null // đối tượng audio context
let countSilentDuration = 0

const SendDataComponent = () => {
  const recogRedux = useSelector(state => state.recognitionReducer)
  useEffect(() => {
    if (recogRedux.ws && recogRedux.ws.readyState === WebSocket.OPEN) {
      // console.log("Send buffer")
      recogRedux.ws.send(recogRedux.audioData)
    }
  }, [recogRedux.audioData])
  return null
}

const TestSocket = () => {
  console.log('TestSocket rendered')
  const dispatch = useDispatch()
  // const textRedux = useSelector(state => state.recognitionReducer.text)
  // if (ws !== null) return null
  let url =
    API_URL +
    '?content-type=audio/x-raw' +
    ',+layout=(string)interleaved' +
    ',+rate=(int)' +
    '44100' +
    ',+format=(string)S16LE' +
    ',+channels=(int)1'

  // eslint-disable-next-line no-undef
  const websocket = new WebSocket(url)

  websocket.onopen = () => {
    // console.log('Socket channel connected')
    isConnected = true
    dispatch(Actions.updateSocket(websocket))
  }

  // Xử lý dữ liệu server trả về
  websocket.onmessage = evt => {
    const message = JSON.parse(evt.data)
    // dispatch(Actions.updateText(message.result.hypotheses[0].transcript_normed))
    // dispatch(Actions.updateText(processJsonResponse(message)))
    if(message.status == 0){
      dispatch(Actions.updateText(message))
    } else {
      alert('Lỗi không tìm thấy mic')
      dispatch(Actions.updateConnectedWS(false))
    }
    // console.log(message)
  }

  websocket.onclose = () => {
    // console.log('Websocket closed')
    // stop()
    dispatch(Actions.updateConnectedWS(false))
  }
  return <SendDataComponent />
}

export const SocketRecognation = () => {
  // console.log("SocketRecognation render")
  const dispatch = useDispatch()
  // const audioRedux = useSelector(state => state.recognitionReducer.audioData)
  const [ws, setWs] = useState(null)
  const [connectWs, setConnectWs] = useState(false)
  // useEffect(() => {
  //   console.log(ws)
  // }, [ws])
  const [state, setState] = useState({
    token: 'k-P-k03vy7MgQ0iV8ItD5oLrjh7CigLWMR1oCeP5QMGs461nNu07k-VzENKNQW-c'
  })

  /**
   * Dừng record audio.
   */
  const stop = () => {
    // Đánh dấu dừng
    isStop = true

    // $('#plain-text').scrollTop($('#plain-text')[0].scrollHeight)
    // clearCanvas()
  }

  /**
   * Đóng web socket.
   */
  const closeWS = () => {
    if (ws && ws.readyState == ws.OPEN) {
      ws.send('EOS')
    }
  }

  const drawBuffer = data => {
    // var canvas = document.getElementById("canvas");
    // var width = canvas.width;
    // var height = canvas.height;
    // var context = canvas.getContext('2d');
    // context.clearRect (0, 0, width, height);
    // var step = Math.floor(data.length / width);
    // var amp = height / 2;
    // var x = 0;
    // var y = amp;
    // context.strokeStyle = "#FFFFFF";
    // context.beginPath();
    // context.moveTo(x, y);
    // for (var i = 0; i < width; i++) {
    //     x = i;
    //     // Tính giá trị y
    //     var min = 1.0;
    //     var max = -1.0;
    //     for (var j = 0; j < step; j++) {
    //         var datum = data[(i * step) + j];
    //         if (datum < min) {
    //             min = datum;
    //         }
    //         if (datum > max) {
    //             max = datum;
    //         }
    //     }
    //     y = ((min + max) / 2 + 1) * amp;
    //     context.lineTo(x, y);
    // }
    // context.stroke();
  }

  const record = connectedWs => {
    // console.log('click record')
    if (connectedWs) {
      // close websocket before stop
      dispatch(Actions.updateAudioData('EOS'))
    }
    dispatch(Actions.updateConnectedWS(!connectedWs))

    // Nếu đang xử lý thì dừng lại
    // if (!isStop) {
    //   closeWS()
    //   stop()
    //   return
    // }
    // console.log('Record func called')
    // Khởi tạo audioContext
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)()
      if (audioContext.state == 'suspended') {
        audioContext.resume()
      }
      // if(isStop)
      if (navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then(stream => {
            let audioInput = audioContext.createMediaStreamSource(stream)
            let bufferSize = 2048
            recorder = audioContext.createScriptProcessor(bufferSize, 1, 1)

            // Xử lý dữ liệu audio
            recorder.onaudioprocess = e => {
              if (!isStop) {
                // Nếu mà không nói lâu quá thì cũng dừng lại
                //if (countSilentDuration > SILENT_DURATION) {
                //    closeWS();
                //    stop();
                //    countSilentDuration = 0;
                //    return;
                //}

                buffer = e.inputBuffer.getChannelData(0)
                drawBuffer(buffer)
                let int16ArrayData = convertFloat32ToInt16(buffer)
                countSilentDuration +=
                  int16ArrayData.length / audioContext.sampleRate
                for (let i = 0; i < int16ArrayData.length; i++) {
                  if (Math.abs(int16ArrayData[i]) > SILENT_THRESHOLD) {
                    countSilentDuration = 0
                    break
                  }
                }

                // Gửi dữ liệu lên server
                // print(int16ArrayData)
                // ws.send(int16ArrayData.buffer)
                // console.log("Audio data", int16ArrayData.buffer)
                dispatch(Actions.updateAudioData(int16ArrayData.buffer))
              }
            }

            audioInput.connect(recorder)
            recorder.connect(audioContext.destination)
          })
          .catch(e => {
            console.log('Error when getUserMedia')
            console.log(e)
          })
      } else {
        alert('Lỗi không tìm thấy mic')
        dispatch(Actions.updateConnectedWS(false))
      }
    }

    // Đánh dấu đang chạy
    isStop = false
    if (!connectWs) {
      setConnectWs(true)
    }

    return null
  }

  const connectedWs = useSelector(state => state.recognitionReducer.connectedWs)
  return (
    <Fragment>
      {connectedWs && <TestSocket />}
      <SpeechRecognition onRecord={() => record(connectedWs)} />
    </Fragment>
  )
}

const convertFloat32ToInt16 = float32ArrayData => {
  let l = float32ArrayData.length
  let int16ArrayData = new Int16Array(l)
  while (l--) {
    int16ArrayData[l] = Math.min(1, float32ArrayData[l]) * 0x7fff
  }
  return int16ArrayData
}
