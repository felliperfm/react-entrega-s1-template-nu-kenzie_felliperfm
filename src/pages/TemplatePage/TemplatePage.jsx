import { Children } from "react";
import { Header } from "../../components/Header";

export const TemplatePage = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};
