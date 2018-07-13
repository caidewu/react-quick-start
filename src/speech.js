import * as SDK from 'microsoft-speech-browser-sdk';

/**
 *
 * @param recognitionMode 识别模式 (Options - Interactive/Conversation/Dictation)
 * @param language  识别语言 zh-CN en-US ja-JP
 * @param format    返回结果形式 (Options - Simple/Detailed)
 * @param subscriptionKey 接口密钥
 * @param file 语音文件
 * @returns {IConnection | *}
 * @constructor
 */
export function RecognizerSetup(recognitionMode, language, format, subscriptionKey, file) {
  let recognizerConfig = new SDK.RecognizerConfig(
    new SDK.SpeechConfig(
      new SDK.Context(
        new SDK.OS(navigator.userAgent, "Browser", null),
        new SDK.Device("SpeechSample", "SpeechSample", "1.0.00000"))),
    recognitionMode, // SDK.RecognitionMode.Interactive  (Options - Interactive/Conversation/Dictation)
    language, // Supported languages are specific to each recognition mode Refer to docs.
    format); // SDK.SpeechResultFormat.Simple (Options - Simple/Detailed)

  // Alternatively use SDK.CognitiveTokenAuthentication(fetchCallback, fetchOnExpiryCallback) for token auth
  let authentication = new SDK.CognitiveSubscriptionKeyAuthentication(subscriptionKey);
  return SDK.CreateRecognizerWithFileAudioSource(recognizerConfig, authentication, file);
}

function UpdateStatus(info) {
  console.log('event: ', info);
}


export function RecognizerStart(recognizer) {
  recognizer.Recognize((event) => {
    /*
        Alternative syntax for typescript devs.
        if (event instanceof SDK.RecognitionTriggeredEvent)
    */
    switch (event.Name) {
      case "RecognitionTriggeredEvent" :
        UpdateStatus("Initializing");
        break;
      case "ListeningStartedEvent" :
        UpdateStatus("Listening");
        break;
      case "RecognitionStartedEvent" :
        UpdateStatus("Listening_Recognizing");
        break;
      case "SpeechStartDetectedEvent" :
        console.log(JSON.stringify(event.Result)); // check console for other information in result
        break;
      case "SpeechHypothesisEvent" :
        console.log(JSON.stringify(event.Result)); // check console for other information in result
        break;
      case "SpeechFragmentEvent" :
        console.log(JSON.stringify(event.Result)); // check console for other information in result
        break;
      case "SpeechEndDetectedEvent" :
        // 识别结束
        console.log(JSON.stringify(event.Result)); // check console for other information in result
        break;
      case "SpeechSimplePhraseEvent" :
        console.log(JSON.stringify(event.Result, null, 3));
        break;
      case "RecognitionEndedEvent" :
        UpdateStatus("Idle");
        console.log(JSON.stringify(event)); // Debug information
        break;
    }
  })
    .On(() => {
        // The request succeeded. Nothing to do here.
      },
      (error) => {
        console.error(error);
      });
}

export function RecognizerStop(recognizer) {
  // recognizer.AudioSource.Detach(audioNodeId) can be also used here. (audioNodeId is part of ListeningStartedEvent)
  recognizer.AudioSource.TurnOff();
}
