import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import AlertStyle from "./alert.style";

type AlertType = "single" | "multiple";

interface AlertMessage {
  message: string;
  type: AlertType;
  onConfirm: () => void;
  onCancel?: () => void;
}

interface AlertContextType {
  addMessage: (props: AlertMessage) => void;
}

const AlertContext = createContext<AlertContextType | null>(null);

const AlertProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [message, setMessage] = useState<AlertMessage | null>(null);

  const addMessage = useCallback((message: AlertMessage) => {
    setMessage(message);
  }, []);

  const handleConfirm = () => {
    message!.onConfirm();
    setMessage(null);
  };

  const handleCancel = () => {
    message!.onCancel!();
    setMessage(null);
  };

  return (
    <AlertContext.Provider value={{ addMessage }}>
      {children}

      {message && (
        <AlertStyle.Container>
          <AlertStyle.Message>{message.message}</AlertStyle.Message>

          <AlertStyle.ButtonBox>
            <AlertStyle.ConfirmButton onClick={handleConfirm}>
              확인
            </AlertStyle.ConfirmButton>
            {message.onCancel && (
              <AlertStyle.CancelButton onClick={handleCancel}>
                취소
              </AlertStyle.CancelButton>
            )}
          </AlertStyle.ButtonBox>
        </AlertStyle.Container>
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
