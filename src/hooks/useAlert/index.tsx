import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import AlertStyle from "./alert.style";

type AlertType = "single" | "multiple" | "notification";

interface AlertMessage {
  message: string;
  type: AlertType;
  time?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
}

interface AlertContextType {
  addMessage: (props: AlertMessage) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

const AlertProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [messageList, setMessageList] = useState<AlertMessage[]>([]);
  const deleteRef = useRef<NodeJS.Timeout | null>(null);

  const addMessage = useCallback((message: AlertMessage) => {
    clearTimeout(deleteRef.current!);
    setMessageList((prev) => [{ ...message, time: Date.now() }, ...prev]);

    if (message.type === "notification") {
      deleteRef.current = setTimeout(() => {
        setMessageList((prev) =>
          prev.filter(({ type }) => type !== "notification")
        );
      }, 3000);
    }
  }, []);

  const handleConfirm = (time: number, confirm?: () => void) => {
    if (confirm) {
      confirm();
    }
    setMessageList((prev) => prev.filter((message) => message.time !== time));
  };

  const handleCancel = (time: number, cancel: () => void) => {
    cancel();
    setMessageList((prev) => prev.filter((message) => message.time !== time));
  };

  return (
    <AlertContext.Provider value={{ addMessage }}>
      {children}

      {messageList.map((message) =>
        message.type === "notification" ? (
          <AlertStyle.NotificationContainer key={message.time}>
            <AlertStyle.Message>{message.message}</AlertStyle.Message>
          </AlertStyle.NotificationContainer>
        ) : (
          <AlertStyle.AlertContainer key={message.time}>
            <AlertStyle.Message>{message.message}</AlertStyle.Message>

            <AlertStyle.ButtonBox>
              <AlertStyle.ConfirmButton
                onClick={() => handleConfirm(message.time!, message.onConfirm)}
              >
                확인
              </AlertStyle.ConfirmButton>
              {message.onCancel && (
                <AlertStyle.CancelButton
                  onClick={() => handleCancel(message.time!, message.onCancel!)}
                >
                  취소
                </AlertStyle.CancelButton>
              )}
            </AlertStyle.ButtonBox>
          </AlertStyle.AlertContainer>
        )
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("AlertProvider를 찾을 수 없습니다.");
  }

  return context;
};

export default AlertProvider;
