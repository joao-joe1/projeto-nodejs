-- CreateTable
CREATE TABLE "compliments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_sender" TEXT NOT NULL,
    "user_receiver" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "compliments_user_sender_fkey" FOREIGN KEY ("user_sender") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "compliments_user_receiver_fkey" FOREIGN KEY ("user_receiver") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
