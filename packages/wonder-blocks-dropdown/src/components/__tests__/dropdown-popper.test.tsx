import * as React from "react";
import {render, screen, waitFor} from "@testing-library/react";

import DropdownPopper from "../dropdown-popper";

describe("DropdownPopper", () => {
    it("renders the children if valid props are passed in", () => {
        // Arrange
        const referenceElement = document.createElement("button");

        // Act
        render(
            <DropdownPopper referenceElement={referenceElement}>
                {() => (
                    <div data-testid="dropdown-container">
                        dropdown container
                    </div>
                )}
            </DropdownPopper>,
        );

        // Assert
        expect(screen.getByTestId("dropdown-container")).toBeInTheDocument();
    });

    it("renders the dropdown aligned to the right", () => {
        // Arrange
        const referenceElement = document.createElement("button");

        // Act
        render(
            <DropdownPopper
                referenceElement={referenceElement}
                alignment="right"
            >
                {() => (
                    <div data-testid="dropdown-container">
                        dropdown container
                    </div>
                )}
            </DropdownPopper>,
        );

        // Assert
        expect(screen.getByTestId("dropdown-popper")).toHaveAttribute(
            "data-placement",
            "bottom-end",
        );
    });

    it("applies a max-height style via floating UI size middleware", async () => {
        // Arrange
        const referenceElement = document.createElement("button");
        // Mock window.innerHeight to simulate available space
        Object.defineProperty(window, 'innerHeight', {
            writable: true,
            configurable: true,
            value: 600,
        });

        // Act
        render(
            <DropdownPopper referenceElement={referenceElement}>
                {() => (
                    <div data-testid="dropdown-container">
                        dropdown container
                    </div>
                )}
            </DropdownPopper>,
        );

        // Assert
        // The floating UI size middleware will set max-height based on available space
        await waitFor(() => {
            const dropdownPopper = screen.getByTestId("dropdown-popper");
            const maxHeight = dropdownPopper.style.maxHeight;
            expect(maxHeight).toBeTruthy();
        });
    });
});
