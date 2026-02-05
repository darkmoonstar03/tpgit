import styles from './page.module.css';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import ChatArea from './components/ChatArea';

export default function Home() {
    return (
        <main className={styles.main}>
            <LeftSidebar />
            <ChatArea />
            <RightSidebar />
        </main>
    );
}
