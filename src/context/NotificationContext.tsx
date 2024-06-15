import React, { createContext, ReactNode, useState } from 'react';

interface NotificationContextProps {
  notification: string | null;
  setNotification: (message: string | null) => void;
}

const NotificationContext = createContext<NotificationContextProps>({
  notification: null,
  setNotification: () => {},
});

interface NotificationProviderProps {
  children: ReactNode;
}

const NotificationProvider = ({ children }: NotificationProviderProps) => {
  const [notification, setNotification] = useState<string | null>(null);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContext, NotificationProvider };
