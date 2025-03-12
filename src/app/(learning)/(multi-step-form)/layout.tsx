import { MultiStepFromProvider } from "./context/MultiStepForm";

export default function MultiStepFromLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <MultiStepFromProvider>{children}</MultiStepFromProvider>
        </>
    );
}
