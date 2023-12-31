import { useState, useEffect, useCallback, FormEvent } from "react";
import { useExpiringState } from "../utils/useExpiringState";
import { useSettingsStore } from "../utils/useSettingsStore";
import { StatusMessage } from "../utils/StatusMessage";

export default function Options() {
  const { loading, settings, setSettings } = useSettingsStore();
  const [openAIApiKeyInputText, setOpenAIApiKeyInputText] = useState("");
  const [message, setMessage] = useExpiringState<StatusMessage | undefined>(
    undefined,
    10_000
  );

  useEffect(() => {
    if (loading) return;
    setOpenAIApiKeyInputText(settings.openAIApiKey ?? "");
  }, [loading, settings]);

  const saveOptions = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        setSettings({
          ...settings,
          openAIApiKey: openAIApiKeyInputText,
        });
        setMessage({
          type: "success",
          message: "Changes have been saved!",
        });
      } catch (error) {
        setMessage({
          type: "error",
          message: `Error while saving changes: ${error}`,
        });
      }
    },
    [openAIApiKeyInputText, setMessage, setSettings, settings]
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <p>
        This extension utilizes OpenAI LLMs and therefore requires
        an{" "}
        <a href="https://platform.openai.com/account/api-keys" target="_blank">
          OpenAI API key
        </a>{" "}
        to function.
      </p>
      <form
        onSubmit={saveOptions}
        onKeyDown={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <label htmlFor="openAIApiKey">Enter OpenAI API Key:</label>
          <input
            name="openAIApiKey"
            type="password"
            style={{
              padding: ".25rem",
            }}
            disabled={loading}
            value={openAIApiKeyInputText}
            onChange={(e) => {
              setOpenAIApiKeyInputText(e.target.value);
            }}
          />
         
        </div>

        <div>
          {message && (
            <p
              style={{
                color: message.type === "error" ? "red" : "green",
              }}
            >
              {message.message}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
            }}
          >
            Save API key
          </button>
        </div>
      </form>
    </div>
  );
}
