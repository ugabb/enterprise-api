-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Enterprise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "ri_number" TEXT,
    "addressId" TEXT NOT NULL,
    CONSTRAINT "Enterprise_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Enterprise" ("addressId", "id", "name", "purpose", "ri_number", "status") SELECT "addressId", "id", "name", "purpose", "ri_number", "status" FROM "Enterprise";
DROP TABLE "Enterprise";
ALTER TABLE "new_Enterprise" RENAME TO "Enterprise";
PRAGMA foreign_key_check("Enterprise");
PRAGMA foreign_keys=ON;
