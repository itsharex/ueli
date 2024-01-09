import type { SearchResultItemAction } from "@common/SearchResultItemAction";
import type { Shell } from "electron";
import type { ActionHandler } from "../Contract/ActionHandler";

export class UrlActionHandler implements ActionHandler {
    public readonly id = "Url";

    public constructor(private readonly shell: Shell) {}

    public invokeAction(action: SearchResultItemAction): Promise<void> {
        return this.shell.openExternal(action.argument);
    }
}