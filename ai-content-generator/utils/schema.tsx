import { pgTable, varchar, serial, text, } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id: serial('id').primaryKey(),
    FormData: varchar('formData').notNull(),
    aiResponse: text('aiResponse').notNull(),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt')
}
    
)