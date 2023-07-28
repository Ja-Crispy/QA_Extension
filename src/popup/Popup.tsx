import { useState } from "react";
import styles from "./Popup.module.css";
import Chatbot from "./Chatbot";
import Options from "../options/Options";
import { useSettingsStore } from "../utils/useSettingsStore";

function Popup() {
  const { loading, settings } = useSettingsStore();

  const [activeTab] = useState(0);

  if (loading || !settings.openAIApiKey) {
    return <Options />;
  }

  return (
    <>
      <main className={styles.container}>
        <div className={styles.tabContent}>
          {activeTab === 0 && <Chatbot />}
        </div>
      </main>
    </>
  );
}

export default Popup;
