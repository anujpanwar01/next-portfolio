import { ChatProvider } from "./store/context";

export default function ChatLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return <ChatProvider>{children}</ChatProvider>;
}
