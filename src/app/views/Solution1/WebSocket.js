import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Actions from '../../redux/action-creators/home'

const SILENT_THRESHOLD = 1000;
const SILENT_DURATION = 10;

let result = null; // xâu text đang nhận dạng
let isStop = true; // có đang DỪNG record audio hay không
let ws = null; // đối tượng web socket

let recorder = null; // đối tượng recorder
let buffer = null; // có chuyển về local được không?
let audioContext = null; // đối tượng audio context
let countSilentDuration = 0;

export const WebSocket = ({ ...restProps }) => {
  const [ws, setWs] = useState(null)
  const dispatch = useDispatch()
  const homeRedux = useSelector(state => state.homeReducer)

  const [state, setState] = useState({
    token: 'k-P-k03vy7MgQ0iV8ItD5oLrjh7CigLWMR1oCeP5QMGs461nNu07k-VzENKNQW-c'
  })

  useEffect(() => {
    const wsEndpoint = `ws://aisol.vn/asr/stream/socket/16k/client/ws/speech`
    // eslint-disable-next-line no-undef
    const ws = new WebSocket(wsEndpoint)
    ws.onopen = () => {
      console.log('Socket channel connected to group ')
    }

    setWs(ws)

    ws.onmessage = evt => {
      const message = JSON.parse(evt.data)
      processJsonResponse(message)
    }

    return () => {
    //   if (ws && ws.readyState == ws.OPEN) {
    //     ws.send('EOS')
    //   }
      console.log('Closing socket')
      ws.close(1000, 'User chose other part. Change socket channel')
    }
  }, [])

  useEffect(() => {
    // dispatch(Actions.updateEditText({text_norm: restProps.sentences[0]}))
  }, [])
  return null
}

const convertFloat32ToInt16 = float32ArrayData => {
  let l = float32ArrayData.length
  let int16ArrayData = new Int16Array(l)
  while (l--) {
    int16ArrayData[l] = Math.min(1, float32ArrayData[l]) * 0x7fff
  }
  return int16ArrayData
}

const processJsonResponse = (resp) => {
    if (resp.status == 0 && resp.result && resp.result.hypotheses.length > 0) {
        //console.log(resp);
        // Shorthand of conditional operator
        let transcript = resp.result.hypotheses[0].transcript_normed || resp.result.hypotheses[0].transcript;
        let text = transcript; // decodeURI(
        //console.log(text);

        // Không nhận dạng được
        if (text == '<unk>.') {
            return;
        }

        if (text.endsWith('.')) {
            // Xóa ký tự cuối cùng của xâu
            text = text.slice(0, -1); 
        }

        if (resp.result.final) {
            // Đã nhận dạng xong, lưu kết quả
            result += "<span>" + text + ". </span>";
            // displayText(result);
        } else {
            // Vẫn đang nhận dạng
            // displayText(result + '<span class="temp">' + text + '</span>');
        }
    }
}
