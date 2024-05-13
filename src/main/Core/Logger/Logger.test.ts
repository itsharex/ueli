import type { BrowserWindowNotifier } from "@Core/BrowserWindowNotifier";
import type { DateProvider } from "@Core/DateProvider/DateProvider";
import { describe, expect, it, vi } from "vitest";
import { Logger } from "./Logger";

describe(Logger, () => {
    const date = new Date();

    it("should log an error", () => {
        const getDateMock = vi.fn().mockReturnValue(date);
        const notifyMock = vi.fn();

        const logger = new Logger(
            <DateProvider>{ get: () => getDateMock() },
            <BrowserWindowNotifier>{ notify: (c) => notifyMock(c) },
        );

        logger.error("This is an error");

        expect(logger.getLogs()).toEqual([`[${date.toLocaleString()}][ERROR] This is an error`]);
        expect(getDateMock).toHaveBeenCalledOnce();
        expect(notifyMock).toHaveBeenCalledWith("logsUpdated");
    });

    it("should log a debug message", () => {
        const getDateMock = vi.fn().mockReturnValue(date);
        const notifyMock = vi.fn();

        const logger = new Logger(
            <DateProvider>{ get: () => getDateMock() },
            <BrowserWindowNotifier>{ notify: (c) => notifyMock(c) },
        );

        logger.debug("This is a debug message");

        expect(logger.getLogs()).toEqual([`[${date.toLocaleString()}][DEBUG] This is a debug message`]);
        expect(getDateMock).toHaveBeenCalledOnce();
        expect(notifyMock).toHaveBeenCalledWith("logsUpdated");
    });

    it("should log a info message", () => {
        const getDateMock = vi.fn().mockReturnValue(date);
        const notifyMock = vi.fn();

        const logger = new Logger(
            <DateProvider>{ get: () => getDateMock() },
            <BrowserWindowNotifier>{ notify: (c) => notifyMock(c) },
        );

        logger.info("This is a info message");

        expect(logger.getLogs()).toEqual([`[${date.toLocaleString()}][INFO] This is a info message`]);
        expect(getDateMock).toHaveBeenCalledOnce();
        expect(notifyMock).toHaveBeenCalledWith("logsUpdated");
    });

    it("should log a warning", () => {
        const getDateMock = vi.fn().mockReturnValue(date);
        const notifyMock = vi.fn();

        const logger = new Logger(
            <DateProvider>{ get: () => getDateMock() },
            <BrowserWindowNotifier>{ notify: (c) => notifyMock(c) },
        );

        logger.warn("This is a warning");

        expect(logger.getLogs()).toEqual([`[${date.toLocaleString()}][WARNING] This is a warning`]);
        expect(getDateMock).toHaveBeenCalledOnce();
        expect(notifyMock).toHaveBeenCalledWith("logsUpdated");
    });
});
