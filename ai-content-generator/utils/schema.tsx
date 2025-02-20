import { pgTable, varchar, serial, text, } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput',{
    id: serial('id').primaryKey(),
    FormData: varchar('formData'),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug'),
    createdBy: varchar('createdBy'),
    createdAt: varchar('createdAt')
}
    
)