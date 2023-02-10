-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
