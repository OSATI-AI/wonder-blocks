const {StyleSheetTestUtils} = require("aphrodite");

const {
    mockRequestAnimationFrame,
} = require("../../utils/testing/mock-request-animation-frame");
const {TextEncoder, TextDecoder} = require("util");

StyleSheetTestUtils.suppressStyleInjection();


const attachShims = (targetWindow) => {
    if (!targetWindow.TextEncoder) {
        targetWindow.TextEncoder = TextEncoder;
    }
    if (!targetWindow.TextDecoder) {
        targetWindow.TextDecoder = TextDecoder;
    }
    // Add MessageChannel polyfill for React 19's server-side rendering
    if (!targetWindow.MessageChannel) {
        targetWindow.MessageChannel = class MessageChannel {
            constructor() {
                this.port1 = {
                    postMessage: () => {},
                    onmessage: null,
                    close: () => {},
                };
                this.port2 = {
                    postMessage: () => {},
                    onmessage: null,
                    close: () => {},
                };
            }
        };
    }
};

const resetWindow = () => {
    attachShims(globalThis);
};
resetWindow();

beforeEach(() => {
    resetWindow();
    mockRequestAnimationFrame();
});
