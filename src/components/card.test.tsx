import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Given King component", () => {
    describe("When we render the component", () => {
        test("Then it should render name of the king", () => {
            render(
                <Card
                    name={"Mufasa"}
                    family={"Admas"}
                    age={20}
                    status={true}
                    message={"Vais a morir todos"}
                    kingdomYear={1}
                    imageURL={"./pepe.jpg"}
                />
            );
            const element = screen.getByText("Admas");
            expect(element).toBeInTheDocument();
        });
    });
});
