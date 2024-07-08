import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

class Mod implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        // get database from server
        const databaseServer = container.resolve<DatabaseServer>("DatabaseServer");
        const tables: IDatabaseTables = databaseServer.getTables();

        const MASK_ITEM = tables.templates.items["635267ab3c89e2112001f826"]; // Spooky Skull Mask
        const CQCMMASK_ITEM = tables.templates.items["657089638db3adca1009f4ca"]; // CQCM Ballistic Mask
        MASK_ITEM._parent = "5448e5724bdc2ddf718b4568"; // Equippable in eyewear slot
        CQCMMASK_ITEM._parent = "5448e5724bdc2ddf718b4568"; // Equippable in eyewear slot


        
    }
}

export const mod = new Mod();
