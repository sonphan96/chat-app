import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="6f45c4f8-1246-4c41-a47b-834b027e1895"
            userName="javascriptmastery"
            userSecret="dadada123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;