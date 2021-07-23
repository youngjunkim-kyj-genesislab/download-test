import axios from 'axios';
import './App.css';

const pdfUrl = `https://api.company.viewinter-hr.ai/v1/api/applicant-ai-analyses/project/597/pdf`;
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoyLCJtYW5hZ2VyX2lkIjoxMDQwLCJ1c2VyX25hbWUiOiJ5b3VuZ2p1bi5raW1AZ2VuZXNpc2xhYi5haSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSIsInRydXN0Il0sImNvbXBhbnlfY29kZSI6IkxHRSIsImxpbmtfaGFzaCI6ImZjMzU0MzFkNTE2YjE1NGRiMjczOWIyMzk4NDFkN2M0MTk1ZjJiYzhiY2ZmOWI0YTI0Y2FkYzhhZTFlMTlhNmVmYzM1NDMxZDUxNmIxNTRkYjI3MzliMjM5ODQxZDdjNDE5NWYyYmM4YmNmZjliNGEyNGNhZGM4YWUxZTE5YTZlZmMzNTQzMWQ1MTZiMTU0ZGIyNzM5YjIzOTg0MWQ3YzQxOTVmMmJjOGJjZmY5YjRhMjRjYWRjOGFlMWUxOWE2ZWZjMzU0MzFkNTE2YjE1NGRiMjczOWIyMzk4NDFkN2M0MTk1ZjJiYzhiY2ZmOWI0YTI0Y2FkYzhhZTFlMTlhNmUiLCJleHAiOjE2MjcwMzA2MTIsImF1dGhvcml0aWVzIjpbIlJPTEVfSFJfTUFOQUdFUiJdLCJqdGkiOiI5NDljMzI4OS1iNWJiLTQ4MGItYTcyZS0yMTFhYjU5M2VlMDUiLCJjbGllbnRfaWQiOiJoci1jb21wYW55In0.cHGIYIoDXWvOe8VBb522GXFly54K8jY6AllFV1wDs1s`;

function App() {
  const downloadFile = (blob, fileName) => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
  };

  const onClickUrlButton = async () => {
    const { data } = await axios.get(pdfUrl, {
      params: {
        token,
      },
      responseType: 'blob',
    });
    downloadFile(data, 'applicant-result.zip');
  };

  return (
    <div className='App'>
      <button onClick={onClickUrlButton}>URL 방식</button>
      <button>다른 방식1</button>
    </div>
  );
}

export default App;
