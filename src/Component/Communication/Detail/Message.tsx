type FileLike = {
  name?: string;
  originalname?: string;
  filename?: string;
  preview?: string;
  [key: string]: any;
};
interface Attachment {
  name?: string;
  originalname?: string;
  filename?: string;
  preview?: string; // URL d'image
  [key: string]: any;
}

export function getFileName(file?: FileLike): string {
  if (!file) return "fichier";

  if (typeof file.name === "string") {
    return file.name;
  }

  if (typeof file.originalname === "string") {
    return file.originalname;
  }

  if (typeof file.filename === "string") {
    return file.filename;
  }

  if (typeof file.preview === "string") {
    try {
      const url = new URL(file.preview);
      const extracted = url.pathname.split("/").pop();
      return extracted ? decodeURIComponent(extracted) : "fichier";
    } catch {
      // Ignore parse errors
    }
  }

  return "fichier";
}

import axios from "axios";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  ICommuniquer,
  IFileName,
  IMessageContent,
} from "../../../Interface/ICommuniquer";
import {
  communication,
  config,
  lien_file_communication,
} from "../../../Static/static";
import "./messaging.css";
import ReturnIcon from "./returnIcon";

const returnNameAgent = (message: IMessageContent) => {
  if (message.agent_terrain.length > 0) {
    return message.agent_terrain[0].nom;
  }
  if (message.agent_admin.length > 0) {
    return message.agent_admin[0].nom;
  }
};

function stripHtml(html: string) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}
type Props = {
  concerne: ICommuniquer;
};
interface FileUploaderProps {
  uploadUrl: string; // URL de votre API d'upload
}
function Communication({ concerne }: Props) {
  const user = useSelector((state: any) => state.user.user);
  const [messages, setMessages] = useState<IMessageContent[]>([]);
  const [load, setLoad] = useState(true);
  const loadingRecent = async () => {
    try {
      setLoad(true);
      const response = await axios.get(
        `${communication}/readCommentMessage/${concerne.idMail}`
      );
      if (response.status === 200) {
        setMessages(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const initialize = async () => {
      await loadingRecent();
      setLoad(false);
    };
    initialize();
  }, [concerne]);
  // const [reponseto, setReponseto] = useState("");

  const [attachments, setAttachments] = useState<Attachment[]>([]);

  const [newMessage, setNewMessage] = useState<string>("");
  // const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (event: any) => {
    event.preventDefault();
    if (!newMessage.trim() && attachments.length === 0) return;

    const formData = new FormData();
    formData.append("content", newMessage);
    formData.append("codeAgent", user.codeAgent);
    formData.append("fonction", user.fonction);
    formData.append("concerne", "");
    formData.append("idMail", concerne.idMail);
    attachments.forEach((file) => {
      formData.append("files", file as Blob);
    });
    const response = await axios.post(
      `${communication}/sendcommentaire`,
      formData,
      config
    );
    setMessages((prev) => [...prev, response.data]);
    setNewMessage("");
    setAttachments([]);
  };

  const returnIconName = (file: IFileName) => {
    return (
      <div className="flexcontent">
        {file.mimetype.startsWith("image/") ? (
          <img
            src={lien_file_communication + "/" + file.filename}
            alt={file.originalname}
            className="wa-image-file"
            style={{
              maxWidth: 120,
              maxHeight: 30,
              marginRight: "10px",
              borderRadius: "7px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 20,
              height: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <ReturnIcon
              originalname={file.originalname}
              width={20}
              height={20}
            />
          </div>
        )}
        <div>
          <a
            href={lien_file_communication + "/" + file.filename}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#075e54",
              fontWeight: 500,
              textDecoration: "none",
              fontSize: "12px",
              whiteSpace: "nowrap",
            }}
          >
            {file.originalname.length > 24
              ? file.originalname.slice(0, 20) + "..."
              : file.originalname}
          </a>
        </div>
      </div>
    );
  };

  const [preview, setPreview] = useState<string[]>([]);

  const handleSelectFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);
    setAttachments(selected);

    // Prévisualisation des images
    const previews = selected.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  return (
    <div className="communication-container">
      <div className="communication-header">
        <div className="contact-info">
          <div className="contact-details">
            {concerne.filename.length > 0 && (
              <div className="flexcontent">
                {concerne.filename.map((index, key) => {
                  return <div key={key}>{returnIconName(index)}</div>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Zone d'affichage des messages façon WhatsApp */}
      <div
        className="communication-messages"
        style={{
          padding: "16px",
          background: "#ece5dd",
          minHeight: "300px",
          overflowY: "auto",
          borderRadius: "12px 12px 0 0",
          marginBottom: "8px",
        }}
      >
        {!load &&
          messages.map((message, index) => {
            const isMe = user && user.codeAgent === message.codeAgent;
            return (
              <div
                key={index}
                className={`wa-message-bubble ${isMe ? "wa-me" : "wa-other"}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: isMe ? "flex-end" : "flex-start",
                  marginBottom: 12,
                }}
              >
                <div
                  className="wa-bubble"
                  style={{
                    background: isMe ? "#dcf8c6" : "#fff",
                    color: "#222",
                    borderRadius: "14px",
                    boxShadow: "0 1px 1px rgba(0,0,0,0.05)",
                    padding: "10px 12px",
                    maxWidth: "70%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      padding: "0px",
                      fontSize: "11px",
                      margin: "0px",
                    }}
                  >
                    {isMe ? "Vous" : returnNameAgent(message)}
                  </span>
                  {message.filename.length > 0 && (
                    <div
                      className="wa-files"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        marginBottom: message.content ? "8px" : 0,
                      }}
                    >
                      {message.filename.map((file, key) => (
                        <div
                          key={key}
                          className="wa-file-item"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            background: "#f6f6f6",
                            borderRadius: "8px",
                            marginBottom: 2,
                          }}
                        >
                          {returnIconName(file)}
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Texte du message */}
                  {message.content && (
                    <span
                      style={{
                        fontSize: "15px",
                        wordBreak: "break-word",
                        lineHeight: "1.7rem",
                      }}
                    >
                      {message.content}
                    </span>
                  )}
                  <span
                    className="wa-time"
                    style={{
                      fontSize: "12px",
                      color: "#999",
                      alignSelf: "flex-end",
                      marginTop: "2px",
                    }}
                  >
                    {moment(message.createdAt).format("HH:mm")}
                  </span>
                </div>
              </div>
            );
          })}
        <div ref={messagesEndRef} />
      </div>

      {attachments.length > 0 && (
        <div className="flexcontent">
          {attachments.map((file, key) => {
            return (
              <div key={key} style={{ width: `${100 / attachments.length}%` }}>
                {file.type === "image" ? (
                  <img
                    src={file.preview}
                    alt=""
                    style={{
                      width: "100%",
                      height: 80,
                      objectFit: "cover",
                      borderRadius: 4,
                    }}
                  />
                ) : (
                  <ReturnIcon
                    originalname={getFileName(file)}
                    width={20}
                    height={20}
                  />
                )}

                <div>
                  <p>{getFileName(file)}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <form className="communication-input-container">
        <div className="communication-input-wrapper">
          <label
            htmlFor="communication-file-input"
            className="attachment-btn"
            style={{ cursor: "pointer" }}
          >
            📎
            <input
              id="communication-file-input"
              type="file"
              style={{ display: "none" }}
              multiple
              onChange={handleSelectFiles}
            />
          </label>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Tapez votre message..."
            className="communication-input"
            // onFocus={() => setIsTyping(true)}
            // onBlur={() => setIsTyping(false)}
          />

          <button
            type="submit"
            onClick={(event) => handleSendMessage(event)}
            className="communication-send-btn"
            disabled={!newMessage.trim()}
          >
            ➤
          </button>
        </div>
      </form>
    </div>
  );
}

export default Communication;
