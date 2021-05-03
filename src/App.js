import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const commands = [
    {
      command: [
        "Navigate to the Queries page",
        "Navigate to the Query page",
        "Go to Queries page",
        "Go to Query page",
        "Head towards Queries page",
        "Head towards Query page",
        "Show Queries page",
        "Show Query page",
        "Visit Queries page",
        "Visit Query page",
        "Open * Queries page",
        "Open * Query page",
        "* Queries page *",
        "* Query page *",
      ],
      callback: () => setMessage("Queries page"),
      isFuzzyMatch: true,
    },
    {
      command: [
        "Navigate to the Blogs page",
        "Go to Blogs page",
        "Head towards Blogs page",
        "Show Blogs page",
        "Visit Blogs page",
        "Open * Blogs page",
        "Open * Blocked page",
        "* Blogs page * ",
      ],
      callback: () => setMessage("Blogs page"),
      isFuzzyMatch: true,
    },
    {
      command: [
        "Navigate to the Notices page",
        "Go to Notices page",
        "Head towards Notices page",
        "Show Notices page",
        "Visit Notices page",
        "Open * Notices page",
        "* Notices *",
      ],
      callback: () => setMessage("Notices page"),
      isFuzzyMatch: true,
    },
    {
      command: [
        "Navigate to the Profile page",
        "Go to Profile page",
        "Head towards Profile page",
        "Show Profile page",
        "Visit Profile page",
        "Open * Profile page",
        "* Profile *",
      ],
      callback: () => setMessage("Profile page"),
      isFuzzyMatch: true,
    },
    {
      command: [
        "* my name *",
        "what is my name *",
        "tell me my name *",
        "who am i",
        "introduce me *",
      ],
      callback: () => setMessage("Name"),
      isFuzzyMatch: true,
    },
    {
      command: [
        "* my branch *",
        "which is my branch *",
        "what is my branch *",
        "tell me my branch *",
        "* branch am i",
        "introduce my branch",
      ],
      callback: () => setMessage("Branch"),
      isFuzzyMatch: true,
    },
    {
      command: ["* previous page *", "* go back *"],
      callback: () => setMessage("Back"),
      isFuzzyMatch: true,
    },
  ];

  const { transcript, resetTranscript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div className="App">
      <button
        onClick={() =>
          SpeechRecognition.startListening({
            continuous: SpeechRecognition.browserSupportsSpeechRecognition(),
            language: "en-IN",
          })
        }
      >
        Start
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
