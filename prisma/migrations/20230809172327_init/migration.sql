-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_sender" TEXT NOT NULL,
    "user_receiver" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "compliments_user_sender_fkey" FOREIGN KEY ("user_sender") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_user_receiver_fkey" FOREIGN KEY ("user_receiver") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_compliments" ("created_at", "id", "message", "tag_id", "user_receiver", "user_sender") SELECT "created_at", "id", "message", "tag_id", "user_receiver", "user_sender" FROM "compliments";
DROP TABLE "compliments";
ALTER TABLE "new_compliments" RENAME TO "compliments";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
